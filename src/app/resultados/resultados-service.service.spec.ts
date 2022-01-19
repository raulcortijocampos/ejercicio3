import { TestBed } from '@angular/core/testing';

import { ResultadosServiceService } from './resultados-service.service';

describe('ResultadosServiceService', () => {
  let service: ResultadosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
