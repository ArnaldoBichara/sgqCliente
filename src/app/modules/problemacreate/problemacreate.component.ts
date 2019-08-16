import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  cadProblemasList: Observable<CadProblema[]>;
  cadProblemaCodigo: string;

  problema = new Problema();
  submitted = false;

  constructor(private problemaService: ProblemaService,
              private router: Router, private secService: SecurityService,
              private cadProblemasService: CadProblemasService) {}

  selectCadProblema() {
    alert(this.cadProblemaCodigo);
  }
  ngOnInit() {
    this.problema.quemReportou = this.secService.UserData.nome;
    this.cadProblemasList = this.cadProblemasService.getCadProblemas();
  }

  newProblema(): void {
    this.submitted = false;
    this.problema = new Problema();
  }

  save() {
    this.problemaService.createProblema(this.problema)
      .subscribe(data => console.log(data), error => console.log(error));
    this.problema = new Problema();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/problemas']);
  }
}
