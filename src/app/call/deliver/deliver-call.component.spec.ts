import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverCallComponent } from './deliver-call.component';

describe('TransportComponent', () => {
  let component: DeliverCallComponent;
  let fixture: ComponentFixture<DeliverCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
