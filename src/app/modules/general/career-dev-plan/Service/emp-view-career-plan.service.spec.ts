import { TestBed } from '@angular/core/testing';

import { EmpViewCareerPlanService } from './emp-view-career-plan.service';

describe('EmpViewCareerPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpViewCareerPlanService = TestBed.get(EmpViewCareerPlanService);
    expect(service).toBeTruthy();
  });
});
