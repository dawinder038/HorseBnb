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
  bookingResult:any;
  imageArray:any;
  constructor(private service: HorseServiceService, private router: Router, private route: ActivatedRoute) { }

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
        console.log("booking",this.bookingResult.attributes.description);
      });
    }, 1000);
  }
}
