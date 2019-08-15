import { Component, OnInit } from '@angular/core';
import { SecurityService } from './shared/services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SGQ Arnaldo Almeida';
  authenticated: boolean = false;
  private userName: string = '';

  constructor(private secService: SecurityService) {
  }
  ngOnInit() {
            console.log('checking authorized' + this.secService.IsAuthorized);
            this.authenticated = this.secService.IsAuthorized;
    
            if (this.authenticated) {
                if (this.secService.UserData)
                    this.userName = this.secService.UserData.email;
            }
          }
    
}
