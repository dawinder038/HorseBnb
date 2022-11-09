import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAdventureComponent } from './host-adventure.component';

describe('HostAdventureComponent', () => {
  let component: HostAdventureComponent;
  let fixture: ComponentFixture<HostAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostAdventureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
