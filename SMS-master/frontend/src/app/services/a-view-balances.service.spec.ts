import { TestBed } from '@angular/core/testing';

import { AViewBalancesService } from './a-view-balances.service';

describe('AViewBalancesService', () => {
  let service: AViewBalancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AViewBalancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
