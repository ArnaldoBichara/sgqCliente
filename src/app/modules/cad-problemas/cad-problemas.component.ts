import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CadProblemasService } from './cad-problemas.service';
import { CadProblema } from '../shared/models/cad-problema.model';


@Component({
  selector: 'app-cad-problemas',
  templateUrl: './cad-problemas.component.html',
  styleUrls: ['./cad-problemas.component.scss']
})
export class CadProblemasComponent implements OnInit {

  cadProblemas: Observable<CadProblema[]>;

  constructor(private cadProblemasService: CadProblemasService, private router: Router) { }

  ngOnInit() {
      this.reloadData();
//    this.cadProblemasService.getCadProblemas().subscribe( dados => {
//        this.cadProblemas = dados,
//        console.log(this.cadProblemas);
//    });
  }
  reloadData() {
    this.cadProblemas = this.cadProblemasService.getCadProblemas();
  }
  cadProblemaDetalhes(id: number){
    this.router.navigate(['detalhes', id]);
  }
}
