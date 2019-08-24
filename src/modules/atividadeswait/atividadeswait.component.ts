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

  constructor(private atividadeService: AtividadeService,
              private router: Router,
              private secService: SecurityService) { }

  ngOnInit() {
      this.reloadData();
      this.atividadeService.getAtividadesWaiting()
      .subscribe(
          data => { console.log(data); },
          error => console.log(error)
        );
  }
  reloadData() {
    this.atividades = this.atividadeService.getAtividadesWaiting();
  }
  atividadeDetalhes(id: number){
    this.router.navigate(['detalhesAtividadeWait', id]);
  }
  atividadeAtribuir(id: number){
    let atividade = new Atividade();

    this.atividadeService.getAtividade(id)
      .subscribe(data => { console.log(data); atividade = data; },
                 error => console.log(error));

    atividade.usuarioAtribuido = this.secService.UserData.nome;

    this.atividadeService.updateAtividade(id, atividade)
        .subscribe(data => console.log(data),
                   error => console.log(error));
    this.list();
 }

 list() {
  this.router.navigate(['/atividadeswait']);
  }
}
