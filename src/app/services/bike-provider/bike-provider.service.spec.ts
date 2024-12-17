import { TestBed } from '@angular/core/testing';
import { BikeProviderService } from './bike-provider.service';

describe('BikeProviderService', () => {
  let service: BikeProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
