import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {
  id: any;
  stripeInfoForm!: FormGroup;
  constructor(private service: HorseServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  intializeForm() {
    this.stripeInfoForm = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      dob: new FormControl(''),
      ssn_last_4: new FormControl(''),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      postal_code: new FormControl(''),
    })
  }
  next() {
    this.router.navigateByUrl('/manage-listing/publish-listing/' + this.id)
  }
  generateStripeToken(data: any) {
    console.log(data);

    let payload = {
      account: {
        individual: {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          ssn_last_4: data.ssn_last_4,
          address: {
            country: data.country,
            state: data.state,
            city: data.city,
            postal_code: data.postal_code,
          },
          dob: {
            day: "day",
            month: "month",
            year: "year"
          }
        }
      }
    }
    this.service.generateStripeTokenApi(payload).subscribe((result:any)=>{
      console.log(result);
    })
  }

}
