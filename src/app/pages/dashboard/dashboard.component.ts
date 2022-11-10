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

  constructor(private service: HorseServiceService) { }

  ngOnInit(): void {
    this.listingQuery();
    this.listingDashboard();

  }
  listingQuery() {
    this.service.listingQueryApi().subscribe((result: any) => {
      console.log(result);
    })
  }
  listingDashboard() {
    this.service.listingDashboardApi().subscribe((result: any) => {
      console.log(result);
      this.booking = result.bookingCount;
      this.earning = result.earning;
      this.reviews = result.reviewCount;
    })

  }
}
