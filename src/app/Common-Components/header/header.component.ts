import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signUpForm!: FormGroup;
  signInForm!: FormGroup;
  createOwnListingForm!:FormGroup;
  fName:any;
  show: boolean = false;
  constructor(private service: HorseServiceService,private router:Router) {
    this.checkLoginStatus();
   }

  ngOnInit(): void {
    this.intializeForm();
  }

  checkLoginStatus() {
    if(sessionStorage.getItem('signUpToken') != null) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  intializeForm() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      country_code: new FormControl('', [Validators.required])
    })
    
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email ]),
      password: new FormControl('', [Validators.required])
    })
 
  }

  signUp(data: any) {
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      "fcmId": "1",
      "deviceId": "1",
      "deviceType": "0",
      protectedData: {
        phoneNumber: data.phoneNumber
      },
      publicData: {
        country_code: data.country_code
      }
    }
    console.log(data);
    console.log(payload);
    this.service.signUpApi(payload).subscribe((result: any) => {
      console.log(result);
    })
  }
  signIn(data: any, clsBtn:HTMLElement) {
    this.service.loginApi(data).subscribe((result: any) => {
      console.log(result)
      clsBtn.click();
      this.fName=result.data.attributes.profile.displayName;
      console.log(result.data.token)
      sessionStorage.setItem('signUpToken', result.data.token);
      this.show=true;
    })
  }
  logout(){
    sessionStorage.clear();
    window.location.reload();
  }
  hostYourStall(){
   setTimeout(() => {
    this.router.navigateByUrl('/host-your-stalls')
   }, 1000);
  }
}
