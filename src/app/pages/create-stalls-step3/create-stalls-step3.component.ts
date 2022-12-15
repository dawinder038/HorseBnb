import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-create-stalls-step3',
  templateUrl: './create-stalls-step3.component.html',
  styleUrls: ['./create-stalls-step3.component.scss'],

})
export class CreateStallsStep3Component implements OnInit {
  counter: any = 0;
  id: any;
  constructor(private service: HorseServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()
    this.id = this.route.snapshot.params['id'];
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

  addStalls() {
    let payload = {
      id: this.id,
      publicData: {
        stalls: this.counter
      }
    }
    this.service.ownListingUpdateApi(payload).subscribe((result: any) => {
      console.log("stalls result", result);
      setTimeout(() => {
        this.router.navigateByUrl('/create-stalls/step5/' + this.id)
      }, 700);
    })
  }

}
