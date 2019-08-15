import { Component, OnInit } from '@angular/core';
import { SecurityService } from './shared/services/security.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SGQ Arnaldo Almeida';
  Authenticated: boolean = false;
  subscription: Subscription;

  private userName: string = '';

  constructor(private secService: SecurityService) {
  }
  ngOnInit() {
    console.log('app on init');
    this.subscription = this.secService.authenticationChallenge$.subscribe(res => this.Authenticated = res);
    console.log('checking authorized ' + this.secService.IsAuthorized);
    this.Authenticated = this.secService.IsAuthorized;
    
    if (this.Authenticated) {
        if (this.secService.UserData) {
            this.userName = this.secService.UserData.nome;
            console.log ('userName ' + this.userName);
        }
    }
  }
}
