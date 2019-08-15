import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProblemaService } from '../problema.service';
import { Problema } from '../problema.model';

@Component({
  selector: 'app-problemacreate',
  templateUrl: './problemacreate.component.html',
  styleUrls: ['./problemacreate.component.scss']
})
export class ProblemaCreateComponent implements OnInit {

  Problema: Problema = new Problema();
  submitted = false;

  constructor(private ProblemaService: ProblemaService,
    private router: Router) { }

  ngOnInit() {
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
