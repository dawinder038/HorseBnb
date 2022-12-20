import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-check-in-check-out',
  templateUrl: './check-in-check-out.component.html',
  styleUrls: ['./check-in-check-out.component.scss']
})
export class CheckInCheckOutComponent implements OnInit {
  checkInOutForm!: FormGroup;
  mytime: Date = new Date();
  id: any;
  leaveTime: any;

  constructor(private service: HorseServiceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.intializeForm();
    this.id = this.route.snapshot.params['id'];
  }
  intializeForm() {
    this.checkInOutForm = new FormGroup({
      arrive_after: new FormControl(''),
      leave_before: new FormControl(''),
    })
  }

  // onTimeChange(time: any) {
  //   var timeSplit = time.split(':');
  //   var hours, minutes, meridian;
  //   hours = parseInt(timeSplit[0]);
  //   minutes = parseInt(timeSplit[1]);
  //   if (minutes == 60) {
  //     hours += 1;
  //   }
  //   if (hours > 12) {
  //     meridian = 'PM';
  //     hours -= 12;
  //   }
  //   else if (hours < 12) {
  //     meridian = 'AM';
  //     if (hours == 0) {
  //       hours = 12;
  //     }
  //   }
  //   else {
  //     meridian = 'PM';
  //   }
  //   if (hours < 10) hours = '0' + hours;
  //   if (minutes < 10) minutes = '0' + minutes;
  //   return hours + ':' + minutes + ' ' + meridian;
  // }

  // next(data: any) {
  //   console.log(data)
  //   let payload = {
  //     id: this.id,
  //     publicData: {
  //       arrive_after: this.arrive,
  //       leave_before: this.leave,
  //       arrive_before: this.onTimeChange('00:00'),
  //       leave_time: this.formatTime()
  //     }
  //   }
  //   this.svc.updateStalls(payload).subscribe((res: any) => {
  //     console.log("payload", payload)
  //   })
  //   this.route.navigateByUrl('create-stalls/succesfull-hosting/'+this.id)
  // }

  checkInOut(data: any) {
    let payload = {
      id: this.id,
      publicData: {
        arrive_after: data.arrive_after,
        arrive_before: "12:00 AM",
        leave_before: data.leave_before,
        leave_time: this.leaveTime,
      }
    }
    console.log(payload);
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.router.navigateByUrl("/create-stalls/successfull-hosting/"+this.id);
    })
  }

}
