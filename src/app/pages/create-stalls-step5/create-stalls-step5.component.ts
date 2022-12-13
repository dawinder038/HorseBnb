import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-create-stalls-step5',
  templateUrl: './create-stalls-step5.component.html',
  styleUrls: ['./create-stalls-step5.component.scss']
})
export class CreateStallsStep5Component implements OnInit {
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
    console.log(data);
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.router.navigateByUrl('/create-stalls/step6/'+this.id);
    })
   
  }
}
