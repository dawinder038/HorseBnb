import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStallsComponent } from './create-stalls.component';

describe('CreateStallsComponent', () => {
  let component: CreateStallsComponent;
  let fixture: ComponentFixture<CreateStallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
