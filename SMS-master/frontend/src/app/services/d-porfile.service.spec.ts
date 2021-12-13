import { TestBed } from '@angular/core/testing';

import { DPorfileService } from './d-porfile.service';

describe('DPorfileService', () => {
  let service: DPorfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DPorfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
