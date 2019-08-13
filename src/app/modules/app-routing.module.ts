import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadProblemasComponent } from './cad-problemas/cad-problemas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadProblema', component: CadProblemasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
