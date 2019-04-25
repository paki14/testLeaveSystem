import { TestBed } from '@angular/core/testing';

import { InterviewSelectionService } from './interview-selection.service';

describe('InterviewSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewSelectionService = TestBed.get(InterviewSelectionService);
    expect(service).toBeTruthy();
  });
});
