import { TestBed } from '@angular/core/testing';

import { RecordApplicantCvService } from './record-applicant-cv.service';

describe('RecordApplicantCvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordApplicantCvService = TestBed.get(RecordApplicantCvService);
    expect(service).toBeTruthy();
  });
});
