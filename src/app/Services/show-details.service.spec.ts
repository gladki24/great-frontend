import { TestBed, inject } from '@angular/core/testing';

import { ShowDetailsService } from './show-details.service';

describe('ShowDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowDetailsService]
    });
  });

  it('should be created', inject([ShowDetailsService], (service: ShowDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
