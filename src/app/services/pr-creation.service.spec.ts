import { TestBed } from '@angular/core/testing';

import { PRCreationService } from './pr-creation.service';

describe('PRCreationService', () => {
  let service: PRCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PRCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
