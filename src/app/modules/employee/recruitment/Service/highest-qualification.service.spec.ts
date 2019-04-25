import { TestBed } from '@angular/core/testing';

import { HighestQualificationService } from './highest-qualification.service';

describe('HighestQualificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighestQualificationService = TestBed.get(HighestQualificationService);
    expect(service).toBeTruthy();
  });
});
