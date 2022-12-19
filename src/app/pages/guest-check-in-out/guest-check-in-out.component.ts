import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
@Component({
  selector: 'app-guest-check-in-out',
  templateUrl: './guest-check-in-out.component.html',
  styleUrls: ['./guest-check-in-out.component.scss']
})
export class GuestCheckInOutComponent implements OnInit {

  checkInOutForm!:FormGroup;
  mytime: Date = new Date();
  id:any;

  constructor(private service:HorseServiceService,private router:Router, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.intializeForm();
    this.id = this.route.snapshot.params['id'];
  }
  intializeForm(){
    this.checkInOutForm = new FormGroup({
      arrive_after:new FormControl(''),
      leave_before: new FormControl('')
    })
  }
  checkInOut(data:any){
    let payload = {
      id:this.id,
      publicData:{
        arrive_after:data.arrive_after,
        leave_before:data.leave_before,
      }
    }
   
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.router.navigateByUrl("/create-guest/successfull-hosting/"+this.id);
    })
  }

}
