import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceStep2Component } from './add-experience-step2.component';

describe('AddExperienceStep2Component', () => {
  let component: AddExperienceStep2Component;
  let fixture: ComponentFixture<AddExperienceStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienceStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExperienceStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
