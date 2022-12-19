import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailTypeTwoComponent } from './avail-type-two.component';

describe('AvailTypeTwoComponent', () => {
  let component: AvailTypeTwoComponent;
  let fixture: ComponentFixture<AvailTypeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailTypeTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
