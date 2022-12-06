import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarAndAvailabilityComponent } from './calendar-and-availability.component';

describe('CalendarAndAvailabilityComponent', () => {
  let component: CalendarAndAvailabilityComponent;
  let fixture: ComponentFixture<CalendarAndAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarAndAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarAndAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
