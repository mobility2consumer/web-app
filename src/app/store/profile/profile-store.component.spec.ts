import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStoreComponent } from './profile-store.component';

describe('ProfileComponent', () => {
  let component: ProfileStoreComponent;
  let fixture: ComponentFixture<ProfileStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
