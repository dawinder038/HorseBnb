import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStallsStep3Component } from './create-stalls-step3.component';

describe('CreateStallsStep3Component', () => {
  let component: CreateStallsStep3Component;
  let fixture: ComponentFixture<CreateStallsStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStallsStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStallsStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
