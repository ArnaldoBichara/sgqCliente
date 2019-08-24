import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AtividadeService } from '../atividade/atividade.service';
import { Atividade } from '../atividade/atividade.model';
import { SecurityService } from '../shared/security.service';

@Component({
  selector: 'app-atividadesatribuidas',
  templateUrl: './atividadesatribuidas.component.html',
  styleUrls: ['./atividadesatribuidas.component.scss']
})
export class AtividadesAtribComponent implements OnInit {

  atividades: Observable<Atividade[]>;

  constructor(private atividadeservice: AtividadeService,
              private router: Router,
              private secService: SecurityService) { }

  ngOnInit() {
      this.reloadData();
      this.atividadeservice.getMinhasAtividades(this.secService.UserData.nome)
      .subscribe(
          data => { console.log(data); },
          error => console.log(error)
        );
  }
  reloadData() {
    this.atividades = this.atividadeservice.getMinhasAtividades(this.secService.UserData.nome);
  }
  atividadeDetalhes(id: number){
    this.router.navigate(['detalhesaAtividadeAtrib', id]);
  }
  registrarAtividade(id: number){
    this.router.navigate(['registrarAtividade', id]);
  }
}
