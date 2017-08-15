import { TestBed, inject } from '@angular/core/testing';

import { EncodeService } from './encode.service';

describe('EncodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EncodeService]
    });
  });

  it('should be created', inject([EncodeService], (service: EncodeService) => {
    expect(service).toBeTruthy();
  }));
});
