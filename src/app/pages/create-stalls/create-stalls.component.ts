import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-stalls',
  templateUrl: './create-stalls.component.html',
  styleUrls: ['./create-stalls.component.scss']
})
export class CreateStallsComponent implements OnInit {
  createOwnListingForm!: FormGroup;
  id: any;
  idFromUrl: any;
  listData: any;
  constructor(private service: HorseServiceService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idFromUrl = this.route.snapshot.params['id'];
    this.ownListingShowId();
    this.intializeForm()
    this.getData()
    
  }

  intializeForm() {
    this.createOwnListingForm = new FormGroup({
      title: new FormControl('',[Validators.required]),
      choose_stall: new FormControl('',[Validators.required]),
    })
  }

  createOwnListing(data: any) {

    if(this.idFromUrl){
      let payload = {
        id:this.idFromUrl,
        title: data.title,
        publicData: {
          type: data.choose_stall,
          "stepsCompleted": [0]
        }
      }
      console.log(payload)
      this.service.ownListingUpdateApi(payload).subscribe((result: any) => {
        console.log(result);
        this.id = result.data.id.uuid;
        this.router.navigateByUrl('/create-stalls/step3/' + this.id);
        console.log(this.router.navigateByUrl('/create-stalls/step3/' + this.id))
      })
    }
    else{
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
    
  }

  getData() {
    this.service.getDataApi().subscribe((result: any) => {
      console.log(result)
    })
  }

  ownListingShowId() {
    console.log(this.idFromUrl)
    this.service.listingShowIdApi(this.idFromUrl).subscribe((result: any) => {
      console.log("particular id data", result);
      this.listData = result.data;
      this.createOwnListingForm.controls['title'].setValue(this.listData.attributes.title);
      this.createOwnListingForm.controls['choose_stall'].setValue(this.listData.attributes.publicData.type);
    })
  }
}
