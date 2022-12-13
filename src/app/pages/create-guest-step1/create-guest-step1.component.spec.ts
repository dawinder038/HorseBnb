import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuestStep1Component } from './create-guest-step1.component';

describe('CreateGuestStep1Component', () => {
  let component: CreateGuestStep1Component;
  let fixture: ComponentFixture<CreateGuestStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGuestStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuestStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
