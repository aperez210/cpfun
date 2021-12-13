import { TestBed } from '@angular/core/testing';

import { SSectionsService } from './s-sections.service';

describe('SSectionsService', () => {
  let service: SSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
