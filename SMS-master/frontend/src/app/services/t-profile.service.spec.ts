import { TestBed } from '@angular/core/testing';

import { TProfileService } from './t-profile.service';

describe('TProfileService', () => {
  let service: TProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
