import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceStep10Component } from './add-experience-step10.component';

describe('AddExperienceStep10Component', () => {
  let component: AddExperienceStep10Component;
  let fixture: ComponentFixture<AddExperienceStep10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienceStep10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExperienceStep10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
