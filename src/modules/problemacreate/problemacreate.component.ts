import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../shared/security.service';
import { ProblemaService } from '../problemas/problema.service';
import { Problema } from '../problemas/problema.model';
import { CadProblema } from '../cad-problemas/cad-problema.model';
import { CadProblemasService } from '../cad-problemas/cad-problemas.service';


@Component({
  selector: 'app-problemacreate',
  templateUrl: './problemacreate.component.html',
  styleUrls: ['./problemacreate.component.scss']
})


export class ProblemaCreateComponent implements OnInit {

  cadProblemas: CadProblema[];

  cadProblema = new CadProblema();
  problema = new Problema();
  submitted = false;

  constructor(private problemaService: ProblemaService,
              private router: Router, private secService: SecurityService,
              private cadProblemasService: CadProblemasService) {}

  ngOnInit() {
    this.problema.quemReportou = this.secService.UserData.nome;
    this.problema.estado = 'aberto';
    this.getCadProblemas();

  }

  getCadProblemas() {
    this.cadProblemasService.getCadProblemas().subscribe (
      dados => { this.cadProblemas = dados;  });
  }
  selectCadProblema() {
    this.problema.codigo = this.cadProblema.codigo;
    this.problema.descricao = this.cadProblema.descricao;
    this.problema.acoes_Corretivas = this.cadProblema.acoes_Corretivas;
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  save() {
    this.problemaService.createProblema(this.problema)
      .subscribe(data => console.log(data), error => console.log(error));
    this.problema = new Problema();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }
}
