import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAtivCreateComponent } from './cad-ativ-create.component';

describe('CadAtivCreateComponent', () => {
  let component: CadAtivCreateComponent;
  let fixture: ComponentFixture<CadAtivCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadAtivCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadAtivCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
