import { TestBed, inject } from '@angular/core/testing';

import { CloudspaceService } from './cloudspace.service';

describe('CloudspaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudspaceService]
    });
  });

  it('should be created', inject([CloudspaceService], (service: CloudspaceService) => {
    expect(service).toBeTruthy();
  }));
});
