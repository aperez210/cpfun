import { TestBed } from '@angular/core/testing';

import { MCreateService } from './m-create.service';

describe('MCreateService', () => {
  let service: MCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
