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
  // bsInlineRangeValue: Date[];
  maxDate = new Date();
  id:any;
  dateArray:any=[]
  datepickerModel?: Date;
  minDate= new Date();
  constructor(private router:Router,private service:HorseServiceService,private route:ActivatedRoute) {
    this.minDate.setDate(this.minDate.getDate());
    // this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
   }

  ngOnInit(): void {
 
  }
pushDateValue(data:any){
  debugger
  console.log(this.datepickerModel);
  this.dateArray.push(this.datepickerModel);
  console.log(this.dateArray);
}
  next(){
    console.log("value",this.datepickerModel);
    this.id = this.route.snapshot.params['id'];
    let payload= {
      listingId:this.id,
      start:this.datepickerModel,
      end:this.datepickerModel,
      seat:0,
    }
    console.log(payload);
    this.service.availabilityExceptionApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.router.navigateByUrl('/create-stalls/step12/'+this.id);
    })
  }
}
