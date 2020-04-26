import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverStoreComponent } from './deliver-store.component';

describe('TransportComponent', () => {
  let component: DeliverStoreComponent;
  let fixture: ComponentFixture<DeliverStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
