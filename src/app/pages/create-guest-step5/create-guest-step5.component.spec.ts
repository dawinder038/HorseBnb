import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuestStep5Component } from './create-guest-step5.component';

describe('CreateGuestStep5Component', () => {
  let component: CreateGuestStep5Component;
  let fixture: ComponentFixture<CreateGuestStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGuestStep5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuestStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
