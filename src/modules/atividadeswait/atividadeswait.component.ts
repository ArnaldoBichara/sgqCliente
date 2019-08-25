import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AtividadeService } from '../atividade/atividade.service';
import { Atividade } from '../atividade/atividade.model';
import { SecurityService } from '../shared/security.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividadeswait.component.html',
  styleUrls: ['./atividadeswait.component.scss']
})
export class AtividadesComponent implements OnInit {

  atividades: Observable<Atividade[]>;
  i: number;

  constructor(private atividadeService: AtividadeService,
              private router: Router,
              private secService: SecurityService) { }

  ngOnInit() {
      this.reloadData();
  }
  reloadData() {
    this.atividades = this.atividadeService.getAtividadesWaiting();
  }
  atividadeDetalhes(id: string) {
    this.router.navigate(['atividadeWaitDetalhes', id]);
  }
  atividadeAtribuir(atividade: Atividade) {

    atividade.usuarioAtribuido = this.secService.UserData.nome;
    atividade.estado = 'atribuida';

    this.atividadeService.updateAtividade(atividade)
      .subscribe(data => { console.log(data);
                           this.reloadData();
                         },
                 error => console.log(error));
  }

 list() {
  this.router.navigate(['/atividadesWait']);
  }
}
