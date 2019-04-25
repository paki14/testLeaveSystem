import { TestBed } from '@angular/core/testing';

import { PlanVacancyService } from './plan-vacancy.service';

describe('PlanVacancyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanVacancyService = TestBed.get(PlanVacancyService);
    expect(service).toBeTruthy();
  });
});
