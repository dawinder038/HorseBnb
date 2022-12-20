import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-successfull-hosting',
  templateUrl: './successfull-hosting.component.html',
  styleUrls: ['./successfull-hosting.component.scss']
})
export class SuccessfullHostingComponent implements OnInit {
  id: any;
  getItForm!: FormGroup;
  isget: boolean = false;
  constructor(private service: HorseServiceService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.intializeForm();
    this.id = this.route.snapshot.params['id'];
    console.log("id",this.id)
  }
  intializeForm() {
    this.getItForm = new FormGroup({
      getIt: new FormControl(''),
    })
  }
  get() {
    this.isget = true
  }
  successfullHosting(data: any) {
    let payload = {
      id: this.id,
      publicData: {
        getIt: this.isget,
      }
    }
    console.log(payload)
    if (this.isget == true) {
      this.service.ownListingUpdateApi(payload).subscribe((result: any) => {
        console.log(result);
        console.log(result.data.attributes.publicData.type);
        if (result.data.attributes.publicData.type == 1) {
          this.router.navigateByUrl('/create-stalls/step11/' + result.data.attributes.publicData.type + '/' + this.id);
        }
        if (result.data.attributes.publicData.type == 2) {
          this.router.navigateByUrl('/create-stalls/availabilty/' + result.data.attributes.publicData.type + '/' + this.id);
        }
      })
    }
    else {
      this.toastr.error('Something Went Wrong');
    }
  }
}
