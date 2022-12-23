import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceStep6Component } from './add-experience-step6.component';

describe('AddExperienceStep6Component', () => {
  let component: AddExperienceStep6Component;
  let fixture: ComponentFixture<AddExperienceStep6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienceStep6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExperienceStep6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
