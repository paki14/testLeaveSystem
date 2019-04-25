import { TestBed } from '@angular/core/testing';

import { DiscussionParticipantsService } from './discussion-participants.service';

describe('DiscussionParticipantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscussionParticipantsService = TestBed.get(DiscussionParticipantsService);
    expect(service).toBeTruthy();
  });
});
