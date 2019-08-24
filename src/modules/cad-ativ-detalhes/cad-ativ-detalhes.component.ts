import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CadAtividade, NormaPadrao, ProdutoProcesso } from '../cad-ativs/cad-ativ.model';
import { CadAtivService } from '../cad-ativs/cad-ativ.service';

@Component({
  selector: 'app-cad-ativ-detalhes',
  templateUrl: './cad-ativ-detalhes.component.html',
  styleUrls: ['./cad-ativ-detalhes.component.scss']
})
export class CadAtivDetalhesComponent implements OnInit {

  codigo: string;
  cadAtividade: CadAtividade;
  isNorma = false;
  isProcesso = false;

  constructor(private route: ActivatedRoute, private router: Router, private cadAtivService: CadAtivService) { }

  ngOnInit() {
    this.cadAtividade = new CadAtividade();
    this.cadAtividade.normaPadraoAssociada = new NormaPadrao();
    this.cadAtividade.produtoProcessoAssociado = new ProdutoProcesso();
    this.codigo = this.route.snapshot.params.codigo;

    this.cadAtivService.getCadAtiv(this.codigo)
      .subscribe(data => {
        console.log(data);
        this.cadAtividade = data;
        if (this.cadAtividade.normaPadraoAssociada.tipo === 'norma') {this.isNorma = true; }
        if (this.cadAtividade.produtoProcessoAssociado.tipo === 'processo') {this.isProcesso = true; }
      }, error => console.log(error));

  }
  list() {
    this.router.navigate(['/cadAtividades']);
  }
}
