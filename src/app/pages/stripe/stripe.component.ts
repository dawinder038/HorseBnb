import { Component, getModuleFactory, OnInit } from '@angular/core';
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
  lastName:any;
  dob:any;
  firstName:any;
  bgImage:any;
  email:any;
  theDate:any;
  phoneNumber:any;
  imageShow:boolean=false;
  bankAccountForm!: FormGroup;
  stripeInfoForm!: FormGroup;

  constructor(private service: HorseServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.intializeForm();
    this.getData();
  }
  getData() {
    this.service.getDataApi().subscribe((result: any) => {
      console.log(result);
      this.firstName = result.data.attributes.profile.firstName;
      this.lastName = result.data.attributes.profile.lastName;
      this.dob = result.data.attributes.profile.publicData.age
      this.email = result.data.attributes.email
      this.phoneNumber = result.data.attributes.profile.protectedData.phoneNumber;

    })
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

  valueSet(){
    this.theDate = new Date( Date.parse(this.dob));
    this.stripeInfoForm.controls['first_name'].setValue(this.firstName);
    this.stripeInfoForm.controls['last_name'].setValue(this.lastName);
    this.stripeInfoForm.controls['email'].setValue(this.email);
    this.stripeInfoForm.controls['dob'].setValue(this.theDate.toLocaleDateString());
    this.stripeInfoForm.controls['phone'].setValue(this.phoneNumber);
  }
  generateStripeToken(data: any) {
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
            day: this.theDate.toLocaleDateString('en-us', { day: 'numeric' }),
            month: this.theDate.toLocaleDateString('en-us', { month: 'numeric' }),
            year: this.theDate.toLocaleDateString('en-us', { year: 'numeric' })
          }
        }
      }
    }
    console.log("dob",payload.account.individual.dob)
    console.log(payload);
    this.service.generateStripeTokenApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.router.navigateByUrl('/manage-listing/publish-listing/' + this.id)
    })
  }
  
  fileChange(event: any) {
    this.service.uploadImage(event).subscribe((result: any) => {
      console.log(result);
      this.bgImage = 'https://shared2.fra1.digitaloceanspaces.com/Uploads/Images/Original/' + result.filename;
      this.imageShow = true;
    });
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
