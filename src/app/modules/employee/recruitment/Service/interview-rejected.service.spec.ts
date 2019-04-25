import { TestBed } from '@angular/core/testing';

import { InterviewRejectedService } from './interview-rejected.service';

describe('InterviewRejectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewRejectedService = TestBed.get(InterviewRejectedService);
    expect(service).toBeTruthy();
  });
});
