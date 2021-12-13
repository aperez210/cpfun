import { TestBed } from '@angular/core/testing';

import { AProfileService } from './a-profile.service';

describe('AProfileService', () => {
  let service: AProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
