import { TestBed } from '@angular/core/testing';

import { CineticoApiService } from './cinetico-api.service';

describe('CineticoApiService', () => {
  let service: CineticoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CineticoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
