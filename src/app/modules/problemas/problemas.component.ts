import { Component, OnInit } from '@angular/core';
import { ProblemasService } from './problemas.service';

@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.component.html',
  styleUrls: ['./problemas.component.scss']
})
export class ProblemasComponent implements OnInit {

  problemas: object;

  constructor(private http: ProblemasService) { }

  ngOnInit() {
    this.http.getCadProblemas().subscribe( dados => {
        this.problemas = dados,
        console.log(this.problemas);
    });
  }
}
