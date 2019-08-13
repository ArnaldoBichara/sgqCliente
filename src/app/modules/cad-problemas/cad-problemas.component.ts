import { Component, OnInit } from '@angular/core';
import { CadProblemasService } from './cad-problemas.service';

@Component({
  selector: 'app-cad-problemas',
  templateUrl: './cad-problemas.component.html',
  styleUrls: ['./cad-problemas.component.scss']
})
export class CadProblemasComponent implements OnInit {

  cadProblemas: object;

  constructor(private http: CadProblemasService) { }

  ngOnInit() {
    this.http.getCadProblemas().subscribe( dados => {
        this.cadProblemas = dados,
        console.log(this.cadProblemas);
    });
  }
}
