import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-manage-listing',
  templateUrl: './manage-listing.component.html',
  styleUrls: ['./manage-listing.component.scss']
})
export class ManageListingComponent implements OnInit {
  totalData: any;

  constructor(private service: HorseServiceService) { }

  ngOnInit(): void {
    this.ownListingQuery();
  }
  ownListingQuery() {
    this.service.ownListingQueryApi().subscribe((result: any) => {
      this.totalData = result.data;
      console.log(result);
    })
  }
}
