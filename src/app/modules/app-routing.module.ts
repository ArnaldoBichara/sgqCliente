import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadProblemasComponent } from './cad-problema/cad-problemas/cad-problemas.component';
import { CadProblemaCreateComponent } from './cad-problema/cad-problema-create/cad-problema-create.component';
import { CadProblemaDetalhesComponent } from './cad-problema/cad-problema-detalhes/cad-problema-detalhes.component';
import { ProblemaComponent } from './problema/problemas/problema.component';
import { ProblemaCreateComponent } from './problema/problemacreate/problemacreate.component';
import { ProblemaDetalhesComponent } from './problema/problemadetalhes/problemadetalhes.component';
import { IdentityComponent } from './identity/identity.component';
//import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'CadProblemas', component: CadProblemasComponent },
  { path: 'detalhesCadProblema', component: CadProblemaDetalhesComponent },
  { path: 'addCadProblema', component: CadProblemaCreateComponent },
  { path: 'Problemas', component: ProblemaComponent },
  { path: 'detalhesProblema', component: ProblemaDetalhesComponent },
  { path: 'addProblema', component: ProblemaCreateComponent },
  { path: 'login', component: IdentityComponent },
//  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
