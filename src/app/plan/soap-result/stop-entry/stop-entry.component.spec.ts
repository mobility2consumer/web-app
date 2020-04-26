import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopEntryComponent } from './stop-entry.component';

describe('ShopEntryComponent', () => {
  let component: StopEntryComponent;
  let fixture: ComponentFixture<StopEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
