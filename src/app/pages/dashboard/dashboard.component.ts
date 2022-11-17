import { R3SelectorScopeMode, ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  booking: any;
  earning: any;
  reviews: any;
  allData:any;
  bgImage:any;

  constructor(private service: HorseServiceService) { }

  ngOnInit(): void {
    this.listingDashboard();
    this.getData();
  }

  listingDashboard() {
    setTimeout(() => {
      this.service.listingDashboardApi().subscribe((result: any) => {
        console.log(result);
        this.booking = result.bookingCount;
        this.earning = result.earning;
        this.reviews = result.reviewCount;
      })
    }, 1000);
  }
  getData() {
    this.service.getDataApi().subscribe((result: any) => {
      console.log(result);
      this.allData = result
      this.bgImage = result.data.attributes.profile.publicData.profile_image;
      console.log(this.bgImage)
    })
  }
}
