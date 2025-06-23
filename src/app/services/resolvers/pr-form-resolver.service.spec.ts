import { TestBed } from '@angular/core/testing';

import { PrFormResolverService } from './pr-form-resolver.service';

describe('PrFormResolverService', () => {
  let service: PrFormResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrFormResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
