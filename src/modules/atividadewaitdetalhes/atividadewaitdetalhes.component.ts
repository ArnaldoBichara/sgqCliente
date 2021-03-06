import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SecurityService } from '../shared/security.service';
import { Atividade } from '../atividade/atividade.model';
import { AtividadeService } from '../atividade/atividade.service';
import { NormaPadrao } from '../atividade/norma-padrao.model';
import { ProdutoProcesso } from '../atividade/produto-processo.model';
import { Workflow } from '../atividade/workflow.model';

@Component({
  selector: 'app-atividadewaitdetalhes',
  templateUrl: './atividadewaitdetalhes.component.html',
  styleUrls: ['./atividadewaitdetalhes.component.scss']
})
export class AtividadeWaitDetalhesComponent implements OnInit {


  id: string;
  atividade: Atividade;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private atividadeService: AtividadeService,
              private secService: SecurityService) { }

  ngOnInit() {
    this.atividade = new Atividade();
    this.atividade.normaPadraoAssociada = new NormaPadrao();
    this.atividade.produtoProcessoAssociado = new ProdutoProcesso();
    this.atividade.workflowAssociado = new Workflow();

    this.id = this.route.snapshot.params.id;

    this.atividadeService.getAtividade(this.id)
      .subscribe(data => {
        console.log(data);
        this.atividade = data;
      }, error => console.log(error));
  }

  atribuir() {
      this.atividade.usuarioAtribuido = this.secService.UserData.nome;
      this.atividade.estado = 'atribuida';
      this.atividadeService.updateAtividade(this.atividade)
        .subscribe(
          data => console.log(data), error => console.log(error));
      this.atividade = new Atividade();
      this.atividadeService.getAtividadesWaiting();
      this.router.navigate(['/home']);
    }

  list() {
    this.router.navigate(['/atividadesWait']);
  }
}
