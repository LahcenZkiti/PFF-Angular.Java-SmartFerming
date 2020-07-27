import { TestBed } from '@angular/core/testing';

import { ExpertAuthGuardService } from './expert-auth-guard.service';

describe('ExpertAuthGuardService', () => {
  let service: ExpertAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
