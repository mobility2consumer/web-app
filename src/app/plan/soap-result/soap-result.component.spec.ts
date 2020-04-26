import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapResultComponent } from './soap-result.component';

describe('SoapResultComponent', () => {
  let component: SoapResultComponent;
  let fixture: ComponentFixture<SoapResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoapResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
