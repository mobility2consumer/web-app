import { TestBed } from '@angular/core/testing';

import { OrdersCallService } from './orders-call.service';

describe('OrdersService', () => {
  let service: OrdersCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
