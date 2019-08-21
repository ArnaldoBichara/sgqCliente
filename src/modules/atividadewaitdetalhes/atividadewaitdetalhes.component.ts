import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SecurityService } from '../shared/security.service';
import { Atividade } from '../atividade/atividade.model';
import { AtividadeService } from '../atividade/atividade.service';

@Component({
  selector: 'app-atividadewaitdetalhes',
  templateUrl: './atividadewaitdetalhes.component.html',
  styleUrls: ['./atividadewaitdetalhes.component.scss']
})
export class AtividadeWaitdetalhesComponent implements OnInit {


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

  atribuir() {
      this.atividade.usuarioAtribuido = this.secService.UserData.nome;
      this.atividadeService.updateAtividade(this.id, this.atividade)
        .subscribe(data => console.log(data), error => console.log(error));
      this.atividade = new Atividade();
      this.list();
  }    

  list() {
    this.router.navigate(['/atividadeswait']);
  }
}
