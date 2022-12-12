import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  id:any;
  priceForm!:FormGroup;
  constructor(private service:HorseServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.intializeForm();
    this.id = this.route.snapshot.params['id'];
  }
  
  intializeForm(){
    this.priceForm = new FormGroup({
      listing_price: new FormControl('')
    })
  }
  
  addPrice(data:any){
    let payload = {
      id:this.id,
      publicData:{
        listing_price : data.listing_price,
      }
    }
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log("listing Price",result);
    })
  }

  next(){
    this.router.navigateByUrl('/create-stalls/step13/'+this.id);
  }

}
