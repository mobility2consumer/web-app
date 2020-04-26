import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCallComponent } from './rent-call.component';

describe('RentComponent', () => {
  let component: RentCallComponent;
  let fixture: ComponentFixture<RentCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
