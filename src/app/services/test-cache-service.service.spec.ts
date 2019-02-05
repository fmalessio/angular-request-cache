import { TestBed } from '@angular/core/testing';

import { TestCacheServiceService } from './test-cache-service.service';

describe('TestCacheServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestCacheServiceService = TestBed.get(TestCacheServiceService);
    expect(service).toBeTruthy();
  });
});
