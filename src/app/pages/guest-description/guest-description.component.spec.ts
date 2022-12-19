import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDescriptionComponent } from './guest-description.component';

describe('GuestDescriptionComponent', () => {
  let component: GuestDescriptionComponent;
  let fixture: ComponentFixture<GuestDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
