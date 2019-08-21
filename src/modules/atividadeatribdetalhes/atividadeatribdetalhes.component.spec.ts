import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeWaitdetalhesComponent } from './atividadeatribdetalhes.component';

describe('AtividadedetalhesComponent', () => {
  let component: AtividadeWaitdetalhesComponent;
  let fixture: ComponentFixture<AtividadeWaitdetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadeWaitdetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadeWaitdetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
