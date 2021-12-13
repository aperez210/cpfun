import { TestBed } from '@angular/core/testing';

import { MProfileService } from './m-profile.service';

describe('MProfileService', () => {
  let service: MProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
