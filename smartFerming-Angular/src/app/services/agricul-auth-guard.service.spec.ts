import { TestBed } from '@angular/core/testing';

import { AgriculAuthGuardService } from './agricul-auth-guard.service';

describe('AgriculAuthGuardService', () => {
  let service: AgriculAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgriculAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
