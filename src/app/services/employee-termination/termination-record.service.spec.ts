import { TestBed } from '@angular/core/testing';

import { TerminationRecordService } from './termination-record.service';

describe('TerminationRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminationRecordService = TestBed.get(TerminationRecordService);
    expect(service).toBeTruthy();
  });
});
