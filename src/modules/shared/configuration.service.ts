import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Configuration } from './configuration.model';
import { StorageService } from './storage.service';

import { Observable, Subject } from 'rxjs';

@Injectable()
export class ConfigurationService {
    serverSettings: Configuration;
    // observable that is fired when settings are loaded from server
    private settingsLoadedSource = new Subject();
    settingsLoaded$ = this.settingsLoadedSource.asObservable();
    isReady = false;

    constructor(private http: HttpClient, private storageService: StorageService) { }

    load() {
        // TODO - por agora está fixo
        this.serverSettings = new Configuration();
        this.serverSettings.apiGwUrl = 'http://192.168.0.26';

/*        const baseURI = document.baseURI.endsWith('/') ? document.baseURI : `${document.baseURI}/`;
        const url = `${baseURI}Home/Configuration`;
        this.http.get(url).subscribe((response) => {
            console.log('server settings loaded');
            this.serverSettings = response as IConfiguration;
            console.log(this.serverSettings);
            this.storageService.store('apiGwUrl', this.serverSettings.apiGwUrl);
            this.isReady = true;
            this.settingsLoadedSource.next();
        });
*/
    }
}
