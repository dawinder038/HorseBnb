import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishListingComponent } from './publish-listing.component';

describe('PublishListingComponent', () => {
  let component: PublishListingComponent;
  let fixture: ComponentFixture<PublishListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
