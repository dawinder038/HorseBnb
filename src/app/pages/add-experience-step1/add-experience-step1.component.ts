import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-add-experience-step1',
  templateUrl: './add-experience-step1.component.html',
  styleUrls: ['./add-experience-step1.component.scss']
})
export class AddExperienceStep1Component implements OnInit {
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
        type: 3,
        "stepsCompleted": [1],
      }
    }
    console.log(payload)
    this.service.createOwnListingApi(payload).subscribe((result: any) => {
      console.log(result);
      this.id = result.data.id.uuid;
      this.router.navigateByUrl('/add-experience/step2/'+this.id)
    })
  }

}
