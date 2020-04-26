import { TestBed } from '@angular/core/testing';

import { StoresCallService } from './stores-call.service';

describe('StoresService', () => {
  let service: StoresCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoresCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
