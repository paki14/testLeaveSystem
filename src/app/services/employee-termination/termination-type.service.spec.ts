import { TestBed } from '@angular/core/testing';

import { TerminationTypeService } from './termination-type.service';

describe('TerminationTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminationTypeService = TestBed.get(TerminationTypeService);
    expect(service).toBeTruthy();
  });
});
