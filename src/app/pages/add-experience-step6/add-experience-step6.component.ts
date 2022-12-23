import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-add-experience-step6',
  templateUrl: './add-experience-step6.component.html',
  styleUrls: ['./add-experience-step6.component.scss']
})
export class AddExperienceStep6Component implements OnInit {
  adventureGroupForm!: FormGroup;
  constructor(private service: HorseServiceService,private route:ActivatedRoute,private router:Router) { }
  id: any;
  ngOnInit(): void {
    this.initializeForm();
    this.id = this.route.snapshot.params['id'];
  }
  initializeForm() {
    this.adventureGroupForm = new FormGroup({
      group_size: new FormControl(''),
    })
  }
  submitGroup(data: any) {
    let payload = {
      availabilityPlan: {
        entries: [
          { dayOfWeek: "sun", seats: data.group_size },
          { dayOfWeek: "mon", seats: data.group_size },
          { dayOfWeek: "tue", seats: data.group_size },
          { dayOfWeek: "wed", seats: data.group_size },
          { dayOfWeek: "thu", seats: data.group_size },
          { dayOfWeek: "fri", seats: data.group_size },
          { dayOfWeek: "sat", seats: data.group_size }
        ]
      },
      id: this.id,
      publicData:{
        group_size:data.group_size,
      }
    }
    this.service.ownListingUpdateApi(payload).subscribe((result: any) => {
      console.log(result);
    })
  }
}
