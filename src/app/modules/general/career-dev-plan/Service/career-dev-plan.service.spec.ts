import { TestBed } from '@angular/core/testing';

import { CareerDevPlanService } from './career-dev-plan.service';

describe('CareerDevPlanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CareerDevPlanService = TestBed.get(CareerDevPlanService);
    expect(service).toBeTruthy();
  });
});
