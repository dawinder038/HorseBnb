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
  HR: any;
  leave: any;

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
  formatTime() {
    let [time12, meridian] = this.leave.split(' ');
    var [hr, m] = time12.split(':')
    this.HR = hr;
    if (this.HR === '12') {
      this.HR = '00'
    }
    if (meridian == "PM") {
      this.HR = parseInt(hr, 10) + 12;
    }
    this.HR = this.HR + ":" + m + ":" + "00"
    return this.HR
  }

  checkInOut(data: any) {
    this.leave=data.leave_before.toLocaleString('en-US', { hour: "2-digit", minute: "2-digit" })
    let payload = {
      id: this.id,
      publicData: {
        arrive_after: data.arrive_after.toLocaleString('en-US', { hour: "2-digit", minute: "2-digit" }),
        arrive_before: "12:00 AM",
        leave_before: data.leave_before.toLocaleString('en-US', { hour: "2-digit", minute: "2-digit" }),
        leave_time: this.formatTime()
      }
    }
    console.log(payload);
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.router.navigateByUrl("/create-stalls/successfull-hosting/"+this.id);
    })
  }
}
