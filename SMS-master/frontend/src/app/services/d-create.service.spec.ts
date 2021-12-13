import { TestBed } from '@angular/core/testing';

import { DCreateService } from './d-create.service';

describe('DCreateService', () => {
  let service: DCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
