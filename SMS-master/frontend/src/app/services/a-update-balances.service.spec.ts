import { TestBed } from '@angular/core/testing';

import { AUpdateBalancesService } from './a-update-balances.service';

describe('AUpdateBalancesService', () => {
  let service: AUpdateBalancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AUpdateBalancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
