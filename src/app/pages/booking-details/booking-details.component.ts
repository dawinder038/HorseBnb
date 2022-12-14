import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  id: any;
  i:any=1;
  imageArrayk:any;
  bookingResult: any;
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  imageArray: any;
  counter: any = 0;
  maxDate = new Date();
  stallsValue: any;
  constructor(private service: HorseServiceService, private router: Router, private route: ActivatedRoute) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  ngOnInit(): void {
    this.showBookingDetail();
    this.id = this.route.snapshot.params['id'];
  }
  showBookingDetail() {
    setTimeout(() => {
      this.service.listingShowIdApi(this.id).subscribe((result: any) => {
        console.log("id", result);
        this.bookingResult = result.data;
       
        this.imageArray = result.data.attributes.publicData.images;
        console.log("booking", this.bookingResult.attributes.description);
      });
    }, 1000);
  }

  incCounter() {
    return this.counter = this.counter + 1;
  }
  decCounter() {
    if (this.counter > 0) {
      this.counter = this.counter - 1;
    }
  }

  addStalls() {
    this.stallsValue = this.counter;
  }

}
