import { TestBed } from '@angular/core/testing';

import { DentalserviveService } from './dentalservive.service';

describe('DentalserviveService', () => {
  let service: DentalserviveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DentalserviveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
