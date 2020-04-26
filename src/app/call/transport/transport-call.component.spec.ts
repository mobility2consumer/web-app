import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportCallComponent } from './transport-call.component';

describe('TransportComponent', () => {
  let component: TransportCallComponent;
  let fixture: ComponentFixture<TransportCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
