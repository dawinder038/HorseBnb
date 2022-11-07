import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostGuestsComponent } from './host-guests.component';

describe('HostGuestsComponent', () => {
  let component: HostGuestsComponent;
  let fixture: ComponentFixture<HostGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostGuestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
