import { TestBed } from '@angular/core/testing';

import { EtudiantEtablissementService } from './etudiant-etablissement.service';

describe('EtudiantEtablissementService', () => {
  let service: EtudiantEtablissementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantEtablissementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
