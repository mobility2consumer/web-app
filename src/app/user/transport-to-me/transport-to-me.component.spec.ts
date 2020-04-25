import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportToMeComponent } from './transport-to-me.component';

describe('TransportComponent', () => {
  let component: TransportToMeComponent;
  let fixture: ComponentFixture<TransportToMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportToMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportToMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
