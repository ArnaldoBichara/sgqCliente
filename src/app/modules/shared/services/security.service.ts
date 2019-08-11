import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfigurationService } from './configuration.service';
import { StorageService } from './storage.service';

@Injectable()
export class SecurityService {

    // tslint:disable-next-line: max-line-length
    constructor(private http: Http, private router: Router, private route: ActivatedRoute, private configurationService: ConfigurationService, private storageService: StorageService) {
        // tslint:disable-next-line: deprecation
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.storage = storageService;

        this.configurationService.settingsLoaded$.subscribe(() => {
            this.authorityUrl = this.configurationService.serverSettings.identityUrl;
            this.storage.store('IdentityUrl', this.authorityUrl);
        });

        if (this.storage.retrieve('IsAuthorized') !== '') {
            this.isAuthorized = this.storage.retrieve('IsAuthorized');
            this.authenticationSource.next(true);
            this.userData = this.storage.retrieve('userData');
        }
    }

    private actionUrl: string;
    // tslint:disable-next-line: deprecation
    private headers: Headers;
    private storage: StorageService;
    private authenticationSource = new Subject<boolean>();
    authenticationChallenge$ = this.authenticationSource.asObservable();
    private authorityUrl = '';

    public isAuthorized: boolean;

    public userData: any;

    public GetToken(): any {
        return this.storage.retrieve('authorizationData');
    }

    public ResetAuthorizationData() {
        this.storage.store('authorizationData', '');
        this.storage.store('authorizationDataIdToken', '');

        this.isAuthorized = false;
        this.storage.store('IsAuthorized', false);
    }
    public SetAuthorizationData(token: any, idtoken: any) {
        if (this.storage.retrieve('authorizationData') !== '') {
            this.storage.store('authorizationData', '');
        }

        this.storage.store('authorizationData', token);
        this.storage.store('authorizationDataIdToken', idtoken);
        this.isAuthorized = true;
        this.storage.store('IsAuthorized', true);

        this.getUserData()
            .subscribe(data => {
                this.userData = data;
                this.storage.store('userData', data);
                // emit observable
                this.authenticationSource.next(true);
                window.location.href = location.origin;
            },
            error => this.HandleError(error),
            () => {
                console.log(this.userData);
            });
    }

    public Authorize() {
        this.ResetAuthorizationData();

        const authorizationUrl = this.authorityUrl + '/connect/authorize';
        // tslint:disable-next-line: variable-name
        const client_id = 'js';
        // tslint:disable-next-line: variable-name
        const redirect_uri = location.origin + '/';
        // tslint:disable-next-line: variable-name
        const response_type = 'id_token token';
        const scope = 'openid profile problemas workflow';
        const nonce = 'N' + Math.random() + '' + Date.now();
        const state = Date.now() + '' + Math.random();

        this.storage.store('authStateControl', state);
        this.storage.store('authNonce', nonce);

        const url =
            authorizationUrl + '?' +
            'response_type=' + encodeURI(response_type) + '&' +
            'client_id=' + encodeURI(client_id) + '&' +
            'redirect_uri=' + encodeURI(redirect_uri) + '&' +
            'scope=' + encodeURI(scope) + '&' +
            'nonce=' + encodeURI(nonce) + '&' +
            'state=' + encodeURI(state);

        window.location.href = url;
    }

    public AuthorizedCallback() {
        this.ResetAuthorizationData();

        const hash = window.location.hash.substr(1);

        // tslint:disable-next-line: only-arrow-functions no-shadowed-variable
        const result: any = hash.split('&').reduce(function(result: any, item: string) {
            const parts = item.split('=');
            result[parts[0]] = parts[1];
            return result;
        }, {});

        console.log(result);

        let token = '';
        let idtoken = '';
        let authResponseIsValid = false;

        if (!result.error) {

            if (result.state !== this.storage.retrieve('authStateControl')) {
                console.log('AuthorizedCallback incorrect state');
            } else {

                token = result.access_token;
                idtoken = result.idtoken;

                const dataIdToken: any = this.getDataFromToken(idtoken);
                console.log(dataIdToken);

                // validate nonce
                if (dataIdToken.nonce !== this.storage.retrieve('authNonce')) {
                    console.log('AuthorizedCallback incorrect nonce');
                } else {
                    this.storage.store('authNonce', '');
                    this.storage.store('authStateControl', '');

                    authResponseIsValid = true;
                    console.log('AuthorizedCallback state and nonce validated, returning access token');
                }
            }
        }


        if (authResponseIsValid) {
            this.SetAuthorizationData(token, idtoken);
        }
    }

    public Logoff() {
        const authorizationUrl = this.authorityUrl + '/connect/endsession';

        const idtokenhint = this.storage.retrieve('authorizationDataIdToken');
        const postlogoutredirecturi = location.origin + '/';

        const url =
            authorizationUrl + '?' +
            'id_token_hint=' + encodeURI(idtokenhint) + '&' +
            'post_logout_redirect_uri=' + encodeURI(postlogoutredirecturi);

        this.ResetAuthorizationData();

        // emit observable
        this.authenticationSource.next(false);
        window.location.href = url;
    }

    public HandleError(error: any) {
        console.log(error);
        if (error.status === 403) {
            this.router.navigate(['/Forbidden']);
        } else if (error.status === 401) {
            // this.ResetAuthorizationData();
            this.router.navigate(['/Unauthorized']);
        }
    }

    private urlBase64Decode(str: string) {
        let output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw new Error('Illegal base64url string!');
        }

        return window.atob(output);
    }

    private getDataFromToken(token: any) {
        let data = {};
        if (typeof token !== 'undefined') {
            const encoded = token.split('.')[1];
            data = JSON.parse(this.urlBase64Decode(encoded));
        }

        return data;
    }

    private getUserData = (): Observable<string[]> => {
        this.setHeaders();
        if (this.authorityUrl === '') {
            this.authorityUrl = this.storage.retrieve('IdentityUrl');
        }

        return this.http.get(this.authorityUrl + '/connect/userinfo', {
            headers: this.headers,
            body: ''
        }).pipe(map(res => res.json()));
    }

    private setHeaders() {
        // tslint:disable-next-line: deprecation
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

        const token = this.GetToken();

        if (token !== '') {
            this.headers.append('Authorization', 'Bearer ' + token);
        }
    }
}
