import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  descriptionForm!: FormGroup;
  id: any;
  listData:any;
  constructor(private service: HorseServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.intializeForm();
    this.id = this.route.snapshot.params['id'];
    this.ownListingShowId();
  }
  intializeForm(){
    this.descriptionForm = new FormGroup({
      description : new FormControl(''),
      extra_detail : new FormControl(''),
    })
  }
  addDescription(data: any) {
    let payload = {
      id: this.id,
      description : data.description,
      publicData:{
        extra_detail :data.extra_detail
      }
    }
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      this.router.navigateByUrl('/create-stalls/checkin-and-checkout/' + this.id);
      console.log(result);
    })
  }

  ownListingShowId() {
    console.log(this.id)
    this.service.listingShowIdApi(this.id).subscribe((result: any) => {
      console.log("particular id data", result);
      this.listData = result.data;
      this.descriptionForm.controls['description'].setValue(this.listData.attributes.description);
      this.descriptionForm.controls['extra_detail'].setValue(this.listData.attributes.publicData.extra_detail)
    })
  }  
}
