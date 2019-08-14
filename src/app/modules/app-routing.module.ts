import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadProblemasComponent } from './cad-problema/cad-problemas/cad-problemas.component';
import { CadProblemaCreateComponent } from './cad-problema/cad-problema-create/cad-problema-create.component';
import { CadProblemaDetalhesComponent } from './cad-problema/cad-problema-detalhes/cad-problema-detalhes.component';


export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'CadProblemas', component: CadProblemasComponent },
  { path: 'detalhesCadProblema', component: CadProblemaDetalhesComponent },
  { path: 'addCadProblema', component: CadProblemaCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
