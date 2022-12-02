import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStallsStep9Component } from './create-stalls-step9.component';

describe('CreateStallsStep9Component', () => {
  let component: CreateStallsStep9Component;
  let fixture: ComponentFixture<CreateStallsStep9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStallsStep9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStallsStep9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
