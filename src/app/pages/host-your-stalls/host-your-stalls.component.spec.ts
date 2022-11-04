import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostYourStallsComponent } from './host-your-stalls.component';

describe('HostYourStallsComponent', () => {
  let component: HostYourStallsComponent;
  let fixture: ComponentFixture<HostYourStallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostYourStallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostYourStallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
