import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuestStep3Component } from './create-guest-step3.component';

describe('CreateGuestStep3Component', () => {
  let component: CreateGuestStep3Component;
  let fixture: ComponentFixture<CreateGuestStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGuestStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuestStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
