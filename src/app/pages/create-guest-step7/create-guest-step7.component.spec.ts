import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuestStep7Component } from './create-guest-step7.component';

describe('CreateGuestStep7Component', () => {
  let component: CreateGuestStep7Component;
  let fixture: ComponentFixture<CreateGuestStep7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGuestStep7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuestStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
