import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadProblemasComponent } from './cad-problemas/cad-problemas.component';
import { CadProblemaCreateComponent } from './cad-problema-create/cad-problema-create.component';
import { CadProblemaDetalhesComponent } from './cad-problema-detalhes/cad-problema-detalhes.component';
import { ProblemaComponent } from './problemas/problema.component';
import { ProblemaCreateComponent } from './problemacreate/problemacreate.component';
import { ProblemaDetalhesComponent } from './problemadetalhes/problemadetalhes.component';
import { IdentityComponent } from './identity/identity.component';
import { CadAtivsComponent } from './cad-ativs/cad-ativs.component';
import { CadAtivDetalhesComponent } from './cad-ativ-detalhes/cad-ativ-detalhes.component';
import { CadAtivCreateComponent } from './cad-ativ-create/cad-ativ-create.component';
import { AtividadesComponent } from './atividadeswait/atividadeswait.component';
import { AtividadesAtribComponent } from './atividadesatribuidas/atividadesatribuidas.component';
import { AtividadeAtribDetalhesComponent } from './atividadeatribdetalhes/atividadeatribdetalhes.component';
import { RegistrarAtividadeComponent } from './atividadereg/regatividade.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadProblemas', component: CadProblemasComponent },
  { path: 'detalhesCadProblema/:codigo', component: CadProblemaDetalhesComponent },
  { path: 'addCadProblema', component: CadProblemaCreateComponent },
  { path: 'problemas', component: ProblemaComponent },
  { path: 'detalhesProblema/:id', component: ProblemaDetalhesComponent },
  { path: 'addProblema', component: ProblemaCreateComponent },
  { path: 'cadAtividades', component: CadAtivsComponent },
  { path: 'detalhesCadAtividade/:codigo', component: CadAtivDetalhesComponent },
  { path: 'addCadAtividade', component: CadAtivCreateComponent },
  { path: 'atividadeswait', component: AtividadesComponent },
  { path: 'atividadesatrib', component: AtividadesAtribComponent },
  { path: 'detalhesAtividadeAtrib', component: AtividadeAtribDetalhesComponent },
  { path: 'registrarAtividade', component: RegistrarAtividadeComponent },
  { path: 'login', component: IdentityComponent },
 // { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
