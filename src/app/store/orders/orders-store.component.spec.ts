import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersStoreComponent } from './orders-store.component';

describe('OrdersComponent', () => {
  let component: OrdersStoreComponent;
  let fixture: ComponentFixture<OrdersStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
