import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInComponent } from './booking-in.component';

describe('BookingInComponent', () => {
  let component: BookingInComponent;
  let fixture: ComponentFixture<BookingInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
