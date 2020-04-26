import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentStoreComponent } from './rent-store.component';

describe('RentComponent', () => {
  let component: RentStoreComponent;
  let fixture: ComponentFixture<RentStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
