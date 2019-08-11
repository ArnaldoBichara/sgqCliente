import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {

    authenticated = false;
    private subscription: Subscription;
    private userName = '';

    constructor(private service: SecurityService) {

    }

    ngOnInit() {
        this.subscription = this.service.authenticationChallenge$.subscribe(res => {
            this.authenticated = res;
            this.userName = this.service.userData.email;
        });

        if (window.location.hash) {
            this.service.AuthorizedCallback();
        }

        console.log('identity component, checking authorized' + this.service.isAuthorized);
        this.authenticated = this.service.isAuthorized;

        if (this.authenticated) {
            if (this.service.userData) {
                this.userName = this.service.userData.email;
            }
        }
    }

    logoutClicked(event: any) {
        event.preventDefault();
        console.log('Logout clicked');
        this.logout();
    }

    login() {
        this.service.Authorize();
    }

    logout() {
        this.service.Logoff();
    }
}

