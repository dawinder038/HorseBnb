import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceStep4Component } from './add-experience-step4.component';

describe('AddExperienceStep4Component', () => {
  let component: AddExperienceStep4Component;
  let fixture: ComponentFixture<AddExperienceStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienceStep4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExperienceStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
