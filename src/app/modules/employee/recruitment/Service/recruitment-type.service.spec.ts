import { TestBed } from '@angular/core/testing';

import { RecruitmentTypeService } from './recruitment-type.service';

describe('RecruitmentTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecruitmentTypeService = TestBed.get(RecruitmentTypeService);
    expect(service).toBeTruthy();
  });
});
