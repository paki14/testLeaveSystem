import { TestBed } from '@angular/core/testing';

import { DiscussionScheduleService } from './discussion-schedule.service';

describe('DiscussionScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscussionScheduleService = TestBed.get(DiscussionScheduleService);
    expect(service).toBeTruthy();
  });
});
