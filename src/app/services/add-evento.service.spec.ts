import { TestBed } from '@angular/core/testing';

import { AddEventoService } from './add-evento.service';

describe('AddEventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEventoService = TestBed.get(AddEventoService);
    expect(service).toBeTruthy();
  });
});
