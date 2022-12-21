import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  id: any;
  priceForm!: FormGroup;
  bookingAcceptType: any;
  listData:any;
  constructor(private service: HorseServiceService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.intializeForm();
    this.id = this.route.snapshot.params['id'];
    this.ownListingShowId();
  }

  intializeForm() {
    this.priceForm = new FormGroup({
      listing_price: new FormControl('')
    })
  }

  bookingType(e: any) {
    this.bookingAcceptType = e.target.value;
  }
  addPrice(data: any) {
    if (data.listing_price > 0) {
      if (this.bookingAcceptType == 1 || this.bookingAcceptType == 2) {
        let payload = {
          id: this.id,
          price: {
            ammount: data.listing_price * 113,
            currency: "USD",
          },
          publicData: {
            listing_price: data.listing_price,
            bokkingAcceptType: this.bookingAcceptType,
            room_price: 0,
          }
        }
        this.service.ownListingUpdateApi(payload).subscribe((result: any) => {
          console.log("listing Price", result);
          this.router.navigateByUrl('/create-stalls/step13/' + this.id);
        })
      }
      else {
        this.toastr.error('Select Instant Booking', 'Error')
      }
    }
    else {
      this.toastr.error('Enter Price', 'Error')
    }
  }

  ownListingShowId() {
    console.log(this.id)
    this.service.listingShowIdApi(this.id).subscribe((result: any) => {
      console.log("particular id data", result);
      this.listData = result.data;
      this.priceForm.controls['listing_price'].setValue(this.listData.attributes.publicData.listing_price);
    })
  }  
}
