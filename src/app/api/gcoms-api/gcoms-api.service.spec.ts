import { TestBed, inject } from '@angular/core/testing';

import { GcomsApiService } from './gcoms-api.service';

describe('GcomsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GcomsApiService]
    });
  });

  it('should be created', inject([GcomsApiService], (service: GcomsApiService) => {
    expect(service).toBeTruthy();
  }));
});
