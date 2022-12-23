import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceStep1Component } from './add-experience-step1.component';

describe('AddExperienceStep1Component', () => {
  let component: AddExperienceStep1Component;
  let fixture: ComponentFixture<AddExperienceStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienceStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExperienceStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
