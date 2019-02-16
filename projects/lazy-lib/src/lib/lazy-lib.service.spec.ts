import { TestBed } from '@angular/core/testing';

import { LazyLibService } from './lazy-lib.service';

describe('LazyLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyLibService = TestBed.get(LazyLibService);
    expect(service).toBeTruthy();
  });
});
