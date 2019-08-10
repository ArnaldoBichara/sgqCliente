import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProblemasComponent } from './Modules/problemas/problemas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'problemas', component: ProblemasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
