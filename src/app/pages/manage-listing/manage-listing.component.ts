import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-manage-listing',
  templateUrl: './manage-listing.component.html',
  styleUrls: ['./manage-listing.component.scss']
})
export class ManageListingComponent implements OnInit {
  totalData: any;
  page: number = 1;
  total: number = 0;
  label: String = ""

  constructor(private service: HorseServiceService) { }

  ngOnInit(): void {
    this.ownListingQuery();
  }
  ownListingQuery() {
    this.service.ownListingQueryApi().subscribe((result: any) => {
      this.totalData = result.data;
      console.log("total-listing",result);
    })
  }
  pageChanged(event: any) {
    this.page = event;
    this.ownListingQuery();
  }
}
