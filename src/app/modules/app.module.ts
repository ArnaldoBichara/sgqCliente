import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProblemasComponent } from './problemas/problemas.component';
import { IdentityComponent } from './shared/components/identity/identity.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProblemasComponent,
    IdentityComponent  // incluir outros novos componentes aqui
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
