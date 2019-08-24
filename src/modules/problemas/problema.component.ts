import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProblemaService } from './problema.service';
import { Problema } from './problema.model';


@Component({
  selector: 'app-problemas',
  templateUrl: './problema.component.html',
  styleUrls: ['./problema.component.scss']
})
export class ProblemaComponent implements OnInit {

  problemas: Observable<Problema[]>;

  constructor(private problemaService: ProblemaService, private router: Router) { }

  ngOnInit() {
      this.reloadData();

      this.problemaService.getProblemasAbertos()
      .subscribe(
          data => { console.log(data); },
          error => console.log(error)
        );
  }
  reloadData() {
    this.problemas = this.problemaService.getProblemasAbertos();
  }
  problemaDetalhes(id: number) {
    this.router.navigate(['detalhesProblema', id]);
  }
}
