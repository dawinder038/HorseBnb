import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceStep7Component } from './add-experience-step7.component';

describe('AddExperienceStep7Component', () => {
  let component: AddExperienceStep7Component;
  let fixture: ComponentFixture<AddExperienceStep7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienceStep7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExperienceStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
