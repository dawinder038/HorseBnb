import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStallStep7Component } from './create-stall-step7.component';

describe('CreateStallStep7Component', () => {
  let component: CreateStallStep7Component;
  let fixture: ComponentFixture<CreateStallStep7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStallStep7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStallStep7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
