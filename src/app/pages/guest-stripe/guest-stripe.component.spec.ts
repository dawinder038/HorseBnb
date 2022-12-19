import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestStripeComponent } from './guest-stripe.component';

describe('GuestStripeComponent', () => {
  let component: GuestStripeComponent;
  let fixture: ComponentFixture<GuestStripeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestStripeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestStripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
