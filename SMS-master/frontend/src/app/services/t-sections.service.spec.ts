import { TestBed } from '@angular/core/testing';

import { TSectionsService } from './t-sections.service';

describe('TSectionsService', () => {
  let service: TSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
