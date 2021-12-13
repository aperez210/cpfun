import { TestBed } from '@angular/core/testing';

import { DViewService } from './d-view.service';

describe('DViewService', () => {
  let service: DViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
