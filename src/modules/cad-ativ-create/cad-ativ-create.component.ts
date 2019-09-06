import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadAtividade } from '../cad-ativs/cad-ativ.model';
import { CadAtivService } from '../cad-ativs/cad-ativ.service';
import { NormaPadrao } from '../atividade/norma-padrao.model';
import { ProdutoProcesso } from '../atividade/produto-processo.model';

@Component({
  selector: 'app-cad-ativ-create',
  templateUrl: './cad-ativ-create.component.html',
  styleUrls: ['./cad-ativ-create.component.scss']
})
export class CadAtivCreateComponent implements OnInit {

  cadAtividade: CadAtividade = new CadAtividade();
  submitted = false;

  constructor(private cadAtivService: CadAtivService,
              private router: Router) { }

  ngOnInit() {
    this.cadAtividade.normaPadraoAssociada = new NormaPadrao();
    this.cadAtividade.produtoProcessoAssociado = new ProdutoProcesso();
    }
  newCadAtividade(): void {
      this.submitted = false;
      this.cadAtividade = new CadAtividade();
    }

  save() {
    this.cadAtivService.createCadAtiv(this.cadAtividade)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cadAtividade = new CadAtividade();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }
}
