import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageListingComponent } from './manage-listing.component';

describe('ManageListingComponent', () => {
  let component: ManageListingComponent;
  let fixture: ComponentFixture<ManageListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
