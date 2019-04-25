import { TestBed } from '@angular/core/testing';

import { JobRoleTemplateService } from './job-role-template.service';

describe('JobRoleTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobRoleTemplateService = TestBed.get(JobRoleTemplateService);
    expect(service).toBeTruthy();
  });
});
