import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-experience-step2',
  templateUrl: './add-experience-step2.component.html',
  styleUrls: ['./add-experience-step2.component.scss']
})
export class AddExperienceStep2Component implements OnInit {


  id:any;
  constructor(private service:HorseServiceService ,private router:Router,private route : ActivatedRoute) { }
  addressForm!: FormGroup;
  ngOnInit(): void {
this.intializeForm()
    this.id = this.route.snapshot.params['id'];
   }

  intializeForm(){
    this.addressForm = new FormGroup({
      country:new FormControl('',[Validators.required]),
      street : new FormControl('',[Validators.required]),
      city : new FormControl('',[Validators.required]),
      postcode : new FormControl('',[Validators.required]),
      state : new FormControl('',[Validators.required]),
      flat:new FormControl(''),
    })
  }
  addAddress(data:any){
    let payload = {
      id:this.id,
      geolocation:{
        lat:30.6977211,
        lng:76.6759107
      },
      publicData:{
        address:{
          city:data.city,
          state:data.state,
          country:data.country,
          postcode:data.postcode,
          street:data.street,
        }
      }
    }
    console.log(payload);
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log("adressr",result);
      this.router.navigateByUrl('/add-experience/step3/'+this.id);
    })
   
  }

}
