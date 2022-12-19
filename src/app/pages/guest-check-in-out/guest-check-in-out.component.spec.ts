import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCheckInOutComponent } from './guest-check-in-out.component';

describe('GuestCheckInOutComponent', () => {
  let component: GuestCheckInOutComponent;
  let fixture: ComponentFixture<GuestCheckInOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestCheckInOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestCheckInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
