import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSuccessfullComponent } from './guest-successfull.component';

describe('GuestSuccessfullComponent', () => {
  let component: GuestSuccessfullComponent;
  let fixture: ComponentFixture<GuestSuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSuccessfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
