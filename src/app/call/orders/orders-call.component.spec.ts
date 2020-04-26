import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCallComponent } from './orders-call.component';

describe('OrdersComponent', () => {
  let component: OrdersCallComponent;
  let fixture: ComponentFixture<OrdersCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
