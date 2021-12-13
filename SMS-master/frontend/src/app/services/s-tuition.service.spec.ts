import { TestBed } from '@angular/core/testing';

import { STuitionService } from './s-tuition.service';

describe('STuitionService', () => {
  let service: STuitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STuitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
