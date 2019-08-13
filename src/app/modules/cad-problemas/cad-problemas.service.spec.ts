import { TestBed } from '@angular/core/testing';

import { CadProblemasService } from './cad-problemas.service';

describe('CadProblemasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CadProblemasService = TestBed.get(CadProblemasService);
    expect(service).toBeTruthy();
  });
});
