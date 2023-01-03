import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {
  id: any;
  i: any = 1;
  show: boolean = true;
  bookingResult: any;
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  imageArray: any;
  counter: any = 0;
  maxDate = new Date();
  stallsValue: any;
  perPage: any = 3;
  hostId: any;
  dates: any;
  bookingForm!: FormGroup;
  showPay: boolean = false;
  hostListingData: any[] = [];
  endData: any;
  startDate: any;
  day: any;
  constructor(private service: HorseServiceService, private router: Router, private route: ActivatedRoute) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  ngOnInit(): void {
    this.intializeForm();
    this.showBookingDetail();
    this.id = this.route.snapshot.params['id'];
    this.hostListing();
  }

  intializeForm() {
    this.bookingForm = new FormGroup({
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required]),
    })
  }

  showBookingDetail() {
    setTimeout(() => {
      this.service.listingShowIdApi(this.id).subscribe((result: any) => {
        console.log("id", result);
        this.hostId = result.data.attributes.publicData.host_id
        this.bookingResult = result.data;
        this.imageArray = result.data.attributes.publicData.images;
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

  viewAll() {
    this.perPage = 100;
    this.hostListing();
  }

  hostListing() {
    setTimeout(() => {
      let payload = {
        host_id: this.hostId,
        perPage: this.perPage,
        page: 1
      }
      console.log("host payload", payload)
      this.service.hostListingApi(payload).subscribe((result: any) => {
        console.log("Host", result);
        this.hostListingData = result.data;
      })
    }, 3000);
  }

  booking(data: any) {
    this.startDate = data.checkIn.toLocaleDateString('en-us', { day: 'numeric' });
    this.endData = data.checkOut.toLocaleDateString('en-us', { day: 'numeric' });
    this.day = this.endData - this.startDate;
    console.log(this.day, "day");

    console.log(data);
    this.dates = data;
    this.show = false;
    this.showPay = true;
  
  }
  confirmPay(data:any){
    let payload = {
      params: {
        bookingEnd: data.checkIn.toLocaleDateString('en-us', { month: 'long', year: 'numeric', day: 'numeric' }),
        bookingStart: data.checkOut.toLocaleDateString('en-us', { month: 'long', year: 'numeric', day: 'numeric' }),
        days: this.day,
        listingId: this.id,
        seats: this.stallsValue,
        timeZone: "+05:30"
      }
    }
    this.service.requestPaymentApi(payload).subscribe((result: any) => {
      console.log(result);
    })
  }

}
