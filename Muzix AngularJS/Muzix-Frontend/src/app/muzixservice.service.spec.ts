import { TestBed } from '@angular/core/testing';

import { MuzixserviceService } from './muzixservice.service';

describe('MuzixserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuzixserviceService = TestBed.get(MuzixserviceService);
    expect(service).toBeTruthy();
  });
});
