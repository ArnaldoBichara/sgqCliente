import { Component, OnInit } from '@angular/core';
import { SecurityService } from './shared/security.service';
import { Subscription } from 'rxjs';
import { ConfigurationService } from './shared/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SGQ Arnaldo Almeida';
  // tslint:disable-next-line: variable-name
  Authenticated = false;
  subscription: Subscription;



  private userName = '';

  constructor(private secService: SecurityService,
              private configurationService: ConfigurationService
              ) { }
  ngOnInit() {
    console.log('app on init');
    this.subscription = this.secService.authenticationChallenge$.subscribe(res => this.Authenticated = res);
    console.log('checking authorized ' + this.secService.IsAuthorized);
    this.Authenticated = this.secService.IsAuthorized;

    // Get configuration from server environment variables:
    this.configurationService.load();

    if (this.Authenticated) {
        if (this.secService.UserData) {
            this.userName = this.secService.UserData.nome;
            console.log ('userName ' + this.userName);
        }
    }
  }
}
