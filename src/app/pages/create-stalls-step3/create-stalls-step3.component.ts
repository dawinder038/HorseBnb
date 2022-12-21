import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-create-stalls-step3',
  templateUrl: './create-stalls-step3.component.html',
  styleUrls: ['./create-stalls-step3.component.scss'],

})
export class CreateStallsStep3Component implements OnInit {
  counter: any = 0;
  stalls:any=0;
  id: any;
  idFromUrl:any;
  listData:any;
  stallForm!:FormGroup;
  constructor(private service: HorseServiceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.intializeForm();
    this.getData()
    this.id = this.route.snapshot.params['id'];
    this.idFromUrl = this.route.snapshot.params['id']
    this.ownListingShowId();
  }
  intializeForm(){
    this.stallForm = new FormGroup({
      stalls: new FormControl(''),
    })
  }

  incCounter() {
    return this.counter = this.counter + 1;
  }

  decCounter() {
    if (this.counter > 0) {
      this.counter = this.counter - 1;
    }

  }

  getData() {
    this.service.getDataApi().subscribe((result: any) => {
      console.log(result);
    })
  }

  addStalls(data:any) {
    console.log(data);
    let payload = {
      id: this.id,
      publicData: {
        stalls: data.stalls
      }
    }
    console.log(payload)
    this.service.ownListingUpdateApi(payload).subscribe((result: any) => {
      console.log("stalls result", result);
      setTimeout(() => {
        this.router.navigateByUrl('/create-stalls/step5/' + this.id)
      }, 700);
    })
  }

  ownListingShowId() {
    console.log(this.idFromUrl)
    this.service.listingShowIdApi(this.idFromUrl).subscribe((result: any) => {
      console.log("particular id data", result);
      this.listData = result.data;
      this.stallForm.controls['stalls'].setValue(this.listData?.attributes?.publicData?.stalls);
    })
  }

}
