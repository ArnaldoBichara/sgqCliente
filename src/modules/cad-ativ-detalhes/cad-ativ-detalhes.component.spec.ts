import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAtivDetalhesComponent } from './cad-ativ-detalhes.component';

describe('CadAtivDetalhesComponent', () => {
  let component: CadAtivDetalhesComponent;
  let fixture: ComponentFixture<CadAtivDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadAtivDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadAtivDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
