import { TestBed } from '@angular/core/testing';

import { RegistraionService } from './registraion.service';

describe('RegistraionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistraionService = TestBed.get(RegistraionService);
    expect(service).toBeTruthy();
  });
});
