import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AtividadeService } from '../atividade/atividade.service';
import { Atividade } from '../atividade/atividade.model';
import { SecurityService } from '../shared/security.service';

@Component({
  selector: 'app-atividadesexecutadas',
  templateUrl: './atividadesexecutadas.component.html',
  styleUrls: ['./atividadesexecutadas.component.scss']
})
export class AtividadesExecutadasComponent implements OnInit {

  atividades: Observable<Atividade[]>;

  constructor(private atividadeservice: AtividadeService,
              private router: Router,
              private secService: SecurityService) { }

  ngOnInit() {
      this.reloadData();
  }
  reloadData() {
    this.atividades = this.atividadeservice.getAtividadesExec();
  }
}
