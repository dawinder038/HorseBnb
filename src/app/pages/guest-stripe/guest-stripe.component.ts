import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
@Component({
  selector: 'app-guest-stripe',
  templateUrl: './guest-stripe.component.html',
  styleUrls: ['./guest-stripe.component.scss']
})
export class GuestStripeComponent implements OnInit {
  id: any;
  bankAccountForm!: FormGroup;
  stripeInfoForm!: FormGroup;
  constructor(private service: HorseServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.intializeForm();
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

    this.bankAccountForm = new FormGroup({
      account_holder_name: new FormControl(''),
      routing_number: new FormControl(''),
      account_number: new FormControl(''),
    })
  }
  generateStripeToken(data: any) {
    console.log(data);

    let payload = {
      account: {
        business_type:"individual",
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
            day: 1,
            month: 2,
            year: 2000
          }
        }
      }
    }
    console.log(payload);
    this.service.generateStripeTokenApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.router.navigateByUrl('/manage-listing/publish-listing/' + this.id)
    })
  }

  generateBankAccountToken(data: any) {
    let payload = {
      bank_account: {
        country: "US",
        currency: "USD",
        account_holder_name: data.account_holder_name,
        account_number: data.account_number,
        routing_number: data.routing_number,
      }
    }
    this.service.generateBankAccountTokenApi(payload).subscribe((result: any) => {
      console.log(result);
     
    })
  }
  skip(){
    this.router.navigateByUrl('/manage-listing/publish-listing/'+this.id);
  }

  
  stripeAccountFetch(){
    setTimeout(() => {
      this.service.stripeAccountFetchApi().subscribe((result:any)=>{
        console.log(result);
        this.router.navigateByUrl('/manage-listing/publish-listing/'+this.id)
      })
    }, 1000);
    
  }

}
