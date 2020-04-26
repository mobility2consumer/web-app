import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresCallComponent } from './stores-call.component';

describe('StoresComponent', () => {
  let component: StoresCallComponent;
  let fixture: ComponentFixture<StoresCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
