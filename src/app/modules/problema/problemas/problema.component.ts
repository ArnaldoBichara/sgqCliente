import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProblemaService } from '../problema.service';
import { Problema } from '../problema.model';


@Component({
  selector: 'app-problemas',
  templateUrl: './problema.component.html',
  styleUrls: ['./problema.component.scss']
})
export class ProblemaComponent implements OnInit {

  Problemas: Observable<Problema[]>;

  constructor(private ProblemaService: ProblemaService, private router: Router) { }

  ngOnInit() {
      this.reloadData();
  }
  reloadData() {
    this.Problemas = this.ProblemaService.getProblemas();
  }
  cadProblemaDetalhes(id: number){
    this.router.navigate(['detalhesProblema', id]);
  }
}
