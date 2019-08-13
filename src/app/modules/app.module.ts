import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CadProblemasComponent } from './cad-problemas/cad-problemas.component';
import { IdentityComponent } from './shared/components/identity/identity.component';

// Services
import { HttpService } from './shared/services/http.service';
import { SecurityService } from './shared/services/security.service';
import { ConfigurationService } from './shared/services/configuration.service';
import { StorageService } from './shared/services/storage.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadProblemasComponent,
    IdentityComponent  // incluir outros novos componentes aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    // tslint:disable-next-line: deprecation
    JsonpModule
  ],
  providers: [
    HttpService,
    SecurityService,
    ConfigurationService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
