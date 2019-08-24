import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SecurityService } from '../shared/security.service';
import { AtividadeService } from '../atividade/atividade.service';
import { Atividade } from '../atividade/atividade.model';

@Component({
  selector: 'app-regatividade',
  templateUrl: './regatividade.component.html',
  styleUrls: ['./regatividade.component.scss']
})
export class RegistrarAtividadeComponent implements OnInit {

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
  onSubmit() {
    this.save();
  }
  save() {
    this.atividade.estado='completada';
    this.atividadeService.updateAtividade(this.id, this.atividade)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
