import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
@Component({
  selector: 'app-create-guest-step6',
  templateUrl: './create-guest-step6.component.html',
  styleUrls: ['./create-guest-step6.component.scss']
})
export class CreateGuestStep6Component implements OnInit {
  id: any;
  isChecked: boolean = false;
  val: any;
  ammentiesForm!:FormGroup;
  ammentiesValue: any[] = [];
  constructor(private router: Router, private route: ActivatedRoute,private service:HorseServiceService) { }

  ngOnInit(): void {
    this.intializeForm();
    this.id = this.route.snapshot.params['id']
  }
  intializeForm(){
    this.ammentiesForm = new FormGroup({
      ammenties : new FormControl(''),
    })
  }

  ammentiesList: any = [
    { isChecked: false, value: "Climate Controlled Barn" },
    { isChecked: false, value: "Indoor Arena" },
    { isChecked: false, value: "Hot Walker" },
    { isChecked: false, value: "Round Pen" },
    { isChecked: false, value: "Tack Room" },
    { isChecked: false, value: "Tack Locker" },
    { isChecked: false, value: "Wash Rack" },
    { isChecked: false, value: "Hot Water" },
    { isChecked: false, value: "Lighted Arena" },
    { isChecked: false, value: "Trail Riding Accessible" },
    { isChecked: false, value: "Dog Friendly" },
    { isChecked: false, value: "Bathroom" },
    { isChecked: false, value: "Wifi" },
    { isChecked: false, value: "Shavings Included" },
    { isChecked: false, value: "Paddock" },
    { isChecked: false, value: "Box Stall" },
    { isChecked: false, value: "Box Stall with Run" },
    { isChecked: false, value: "Stall Fans" },
    { isChecked: false, value: "Accept Stallions" }
  ]
  
  checkAmmentiesvalue(event: any) {
    this.val = event.target.value
    if (event.isChecked) {
      this.isChecked = true;
    } else {
      this.isChecked = false;
      this.ammentiesValue.push(this.val)
    }
  }

  addAmmenties(data:any) {
    let payload = {
      id:this.id,
      publicData:{
        amenities:this.ammentiesValue,
      }
    }
    console.log(payload)
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log(result);
    })
    this.router.navigateByUrl('/create-guest/step7/' + this.id);
  }
}
