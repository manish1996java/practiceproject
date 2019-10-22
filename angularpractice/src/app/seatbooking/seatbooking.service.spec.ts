import { TestBed } from '@angular/core/testing';

import { SeatbookingService } from './seatbooking.service';

describe('SeatbookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeatbookingService = TestBed.get(SeatbookingService);
    expect(service).toBeTruthy();
  });
});
