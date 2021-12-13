import { TestBed } from '@angular/core/testing';

import { MEnrollService } from './m-enroll.service';

describe('MEnrollService', () => {
  let service: MEnrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MEnrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
