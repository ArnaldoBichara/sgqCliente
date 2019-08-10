import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProblemasComponent } from './modules/problemas/problemas.component';
import { IdentityComponent } from './modules/shared/components/identity/identity.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProblemasComponent,
    IdentityComponent,
    HeaderComponent   // incluir outros novos componentes aqui
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
