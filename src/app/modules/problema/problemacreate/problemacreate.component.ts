import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { SecurityService } from '../../shared/services/security.service';
import { ProblemaService } from '../Problema.service';
import { Problema } from '../Problema.model';

@Component({
  selector: 'app-problemacreate',
  templateUrl: './problemacreate.component.html',
  styleUrls: ['./problemacreate.component.scss']
})
export class ProblemaCreateComponent implements OnInit {

  Problema = new Problema();
  submitted = false;
  
  constructor(private ProblemaService: ProblemaService,
    private router: Router, private secService: SecurityService) {}

  ngOnInit() {
    this.Problema.quemReportou = this.secService.UserData.nome;
  }

  newProblema(): void {
    this.submitted = false;
    this.Problema = new Problema();
  }

  save() {
    this.ProblemaService.createProblema(this.Problema)
      .subscribe(data => console.log(data), error => console.log(error));
    this.Problema = new Problema();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/Problemas']);
  }
}
