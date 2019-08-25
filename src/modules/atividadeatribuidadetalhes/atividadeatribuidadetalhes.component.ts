import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SecurityService } from '../shared/security.service';
import { Atividade } from '../atividade/atividade.model';
import { AtividadeService } from '../atividade/atividade.service';
import { NormaPadrao } from '../atividade/norma-padrao.model';
import { ProdutoProcesso } from '../atividade/produto-processo.model';
import { InstProdutoProcesso } from '../atividade/instproduto-processo.model';
import { Workflow } from '../atividade/workflow.model';

@Component({
  selector: 'app-atividadeatribdetalhes',
  templateUrl: './atividadeatribuidadetalhes.component.html',
  styleUrls: ['./atividadeatribuidadetalhes.component.scss']
})
export class AtividadeAtribDetalhesComponent implements OnInit {


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
    this.atividade.produtoProcessoAnalisados = new InstProdutoProcesso();

    this.id = this.route.snapshot.params.id;

    this.atividadeService.getAtividade(this.id)
      .subscribe(data => {
        console.log(data);
        this.atividade = data;
      }, error => console.log(error));
  }

  registrarAtividade() {
    this.router.navigate(['registrarAtividade', this.id]);
  }

  list() {
    this.router.navigate(['/atividadesAtrib']);
  }
}
