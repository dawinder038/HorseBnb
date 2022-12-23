import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceStep5Component } from './add-experience-step5.component';

describe('AddExperienceStep5Component', () => {
  let component: AddExperienceStep5Component;
  let fixture: ComponentFixture<AddExperienceStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienceStep5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExperienceStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
