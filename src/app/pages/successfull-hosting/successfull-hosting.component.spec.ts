import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullHostingComponent } from './successfull-hosting.component';

describe('SuccessfullHostingComponent', () => {
  let component: SuccessfullHostingComponent;
  let fixture: ComponentFixture<SuccessfullHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullHostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfullHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
