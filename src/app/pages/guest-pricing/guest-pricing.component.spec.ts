import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPricingComponent } from './guest-pricing.component';

describe('GuestPricingComponent', () => {
  let component: GuestPricingComponent;
  let fixture: ComponentFixture<GuestPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
