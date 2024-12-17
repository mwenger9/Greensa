import { TestBed } from '@angular/core/testing';

import { StringGuardService } from './string-guard.service';

describe('StringGuardService', () => {
  let service: StringGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
