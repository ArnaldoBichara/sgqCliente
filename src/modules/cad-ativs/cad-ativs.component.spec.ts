import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAtivsComponent } from './cad-ativs.component';

describe('CadAtivComponent', () => {
  let component: CadAtivsComponent;
  let fixture: ComponentFixture<CadAtivsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadAtivsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadAtivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
