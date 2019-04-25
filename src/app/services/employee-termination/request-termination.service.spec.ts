import { TestBed } from '@angular/core/testing';

import { RequestTerminationService } from './request-termination.service';

describe('RequestTerminationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestTerminationService = TestBed.get(RequestTerminationService);
    expect(service).toBeTruthy();
  });
});
