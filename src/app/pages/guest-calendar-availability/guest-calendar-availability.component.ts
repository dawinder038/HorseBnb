import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-guest-calendar-availability',
  templateUrl: './guest-calendar-availability.component.html',
  styleUrls: ['./guest-calendar-availability.component.scss']
})
export class GuestCalendarAvailabilityComponent implements OnInit {

  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  id:any;
  constructor(private router:Router,private service:HorseServiceService,private route:ActivatedRoute) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  next(){
    console.log("value",this.bsInlineRangeValue);
    let payload= {
      listingId:this.id,
      start:this.bsInlineRangeValue[0],
      end:this.bsInlineRangeValue[1],
      seat:0,
    }
    console.log(payload);
    this.service.availabilityExceptionApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.router.navigateByUrl('/create-guest/step12/'+this.id)
    })
    
  }

}
