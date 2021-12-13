import { TestBed } from '@angular/core/testing';

import { MViewService } from './m-view.service';

describe('MViewService', () => {
  let service: MViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
