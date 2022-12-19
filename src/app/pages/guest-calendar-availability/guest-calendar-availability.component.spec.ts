import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCalendarAvailabilityComponent } from './guest-calendar-availability.component';

describe('GuestCalendarAvailabilityComponent', () => {
  let component: GuestCalendarAvailabilityComponent;
  let fixture: ComponentFixture<GuestCalendarAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestCalendarAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestCalendarAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
