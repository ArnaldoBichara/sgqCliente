import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadecreateComponent } from './regatividade.component';

describe('AtividadecreateComponent', () => {
  let component: AtividadecreateComponent;
  let fixture: ComponentFixture<AtividadecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtividadecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtividadecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
