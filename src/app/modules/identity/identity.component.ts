import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SecurityService } from '../shared/services/security.service';
import { StorageService } from '../shared/services/storage.service';
import { Usuario } from '../shared/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {

    authenticated = false;
    private subscription: Subscription;
    Usuario: Usuario = new Usuario();
    submitted = false;
  
    constructor(private secService: SecurityService, private storeService: StorageService, private router: Router) {

    }

    ngOnInit() {
        console.log('identity component, checking authorized' + this.secService.IsAuthorized);
        this.authenticated = this.secService.IsAuthorized;

        if (this.authenticated) {
            if (this.secService.UserData) {
                this.Usuario.nome = this.secService.UserData.nome;
                this.Usuario.email = this.secService.UserData.email;
            }
        }
    }

    logoutClicked(event: any) {
        event.preventDefault();
        console.log('Logout clicked');
        this.logout();
    }

    logout() {
        this.secService.Logoff();
    }

    login() {
        this.submitted = true;
        this.storeService.StoreUser(this.Usuario);
        this.secService.Authorize();
      }
      
      gotoHome() {
        this.router.navigate(['/']);
      }
}

