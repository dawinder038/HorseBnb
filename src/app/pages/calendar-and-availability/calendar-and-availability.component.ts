import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-calendar-and-availability',
  templateUrl: './calendar-and-availability.component.html',
  styleUrls: ['./calendar-and-availability.component.scss']
})
export class CalendarAndAvailabilityComponent implements OnInit {
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
    let payload= {
      listingId:this.id,
      start:this.bsInlineRangeValue,
      end:this.bsInlineRangeValue,
      seat:0,
    }
    console.log(payload);
    // this.service.availabilityExceptionApi().subscribe((result:any)=>{
    //   console.log(result);
    // })
    // this.router.navigateByUrl('/create-stalls/step12/'+this.id)
  }

 
}
