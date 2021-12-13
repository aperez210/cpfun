import { TestBed } from '@angular/core/testing';

import { DEnrollService } from './d-enroll.service';

describe('DEnrollService', () => {
  let service: DEnrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DEnrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
