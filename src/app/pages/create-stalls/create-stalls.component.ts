import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
@Component({
  selector: 'app-create-stalls',
  templateUrl: './create-stalls.component.html',
  styleUrls: ['./create-stalls.component.scss']
})
export class CreateStallsComponent implements OnInit {
  createOwnListingForm!: FormGroup;
  constructor(private service: HorseServiceService) { }

  ngOnInit(): void {
    this.intializeForm()
  }
  intializeForm() {
    this.createOwnListingForm = new FormGroup({
      title: new FormControl(''),
    })
  }
  createOwnListing(data: any) {
    let payload = {
      title: data.title,
      publicData: {
        "type": 0,
        "stepsCompleted": [0]
      }
    }
    this.service.createOwnListingApi(payload).subscribe((result: any) => {
      console.log(result);
    })
  }
}
