import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-stalls',
  templateUrl: './create-stalls.component.html',
  styleUrls: ['./create-stalls.component.scss']
})
export class CreateStallsComponent implements OnInit {
  createOwnListingForm!: FormGroup;
  id: any;
  constructor(private service: HorseServiceService, private router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.intializeForm()
    this.getData()
  }

  intializeForm() {
    this.createOwnListingForm = new FormGroup({
      title: new FormControl(''),
      choose_stall: new FormControl('')
    })
  }

  createOwnListing(data: any) {

    let payload = {
      title: data.title,
      publicData: {
        type: data.choose_stall,
        "stepsCompleted": [0]
      }
    }
    console.log(payload)
    this.service.createOwnListingApi(payload).subscribe((result: any) => {
      console.log(result);
      this.id = result.data.id.uuid;
      this.router.navigateByUrl('/create-stalls/step3/' + this.id);
  
      console.log(this.router.navigateByUrl('/create-stalls/step3/' + this.id))
    })
  }

  getData() {
    this.service.getDataApi().subscribe((result: any) => {
      console.log(result)
    })
  }

  ownListingShowId() {
    this.service.listingShowIdApi(this.id).subscribe((result: any) => {
      console.log(result);
    })
  }

}
