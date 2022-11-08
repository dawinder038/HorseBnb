import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStallsStep5Component } from './create-stalls-step5.component';

describe('CreateStallsStep5Component', () => {
  let component: CreateStallsStep5Component;
  let fixture: ComponentFixture<CreateStallsStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStallsStep5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStallsStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
