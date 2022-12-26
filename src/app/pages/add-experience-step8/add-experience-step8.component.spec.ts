import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceStep8Component } from './add-experience-step8.component';

describe('AddExperienceStep8Component', () => {
  let component: AddExperienceStep8Component;
  let fixture: ComponentFixture<AddExperienceStep8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienceStep8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExperienceStep8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
