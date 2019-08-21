import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SecurityService } from '../shared/security.service';
import { Atividade } from '../atividade/atividade.model';
import { AtividadeService } from '../atividade/atividade.service';

@Component({
  selector: 'app-atividadeatribdetalhes',
  templateUrl: './atividadeatribdetalhes.component.html',
  styleUrls: ['./atividadeatribdetalhes.component.scss']
})
export class AtividadeAtribDetalhesComponent implements OnInit {


  id: number;
  atividade: Atividade;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private atividadeService: AtividadeService,
              private secService: SecurityService) { }

  ngOnInit() {
    this.atividade = new Atividade();

    this.id = this.route.snapshot.params.id;

    this.atividadeService.getAtividade(this.id)
      .subscribe(data => {
        console.log(data);
        this.atividade = data;
      }, error => console.log(error));
  }

  registrarAtividade(id: number){
    this.router.navigate(['registrarAtividade', id]);
  }

  list() {
    this.router.navigate(['/atividadesatrib']);
  }
}
