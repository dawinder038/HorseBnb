import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuestStep6Component } from './create-guest-step6.component';

describe('CreateGuestStep6Component', () => {
  let component: CreateGuestStep6Component;
  let fixture: ComponentFixture<CreateGuestStep6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGuestStep6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuestStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
