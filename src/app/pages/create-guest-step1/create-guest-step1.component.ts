import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-create-guest-step1',
  templateUrl: './create-guest-step1.component.html',
  styleUrls: ['./create-guest-step1.component.scss']
})
export class CreateGuestStep1Component implements OnInit {
  id:any;
  createGuestForm!:FormGroup;

  constructor(private service:HorseServiceService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.intializeForm();
    // this.getData();
  }

  intializeForm(){
    this.createGuestForm = new FormGroup({
      title: new FormControl(''),
    })
  }
  createOwnListing(data: any) {
    let payload = {
      title: data.title,
      publicData: {
        type: 4,
        "stepsCompleted": [1],
      }
    }
    console.log(payload)
    this.service.createOwnListingApi(payload).subscribe((result: any) => {
      console.log(result);
      this.id = result.data.id.uuid;
    })
  }

  // getData() {
  //   this.service.getDataApi().subscribe((result: any) => {
  //     console.log(result)
  //   })
  // }

  // ownListingShowId() {
  //   this.service.listingShowIdApi(this.id).subscribe((result: any) => {
  //     console.log(result);
  //   })
  // }
}
