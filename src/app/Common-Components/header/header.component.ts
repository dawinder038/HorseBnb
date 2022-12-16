import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { ToastrService } from 'ngx-toastr';


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
  allData:any;
  bgImage:any;
  show: boolean = false;
  constructor(private service: HorseServiceService,private router:Router,private toastr:ToastrService) {
    this.checkLoginStatus();
   }

  ngOnInit(): void {
    this.intializeForm();
    this.getData();
  }

  // check login status or change header during login

  checkLoginStatus() {
    if(sessionStorage.getItem('signUpToken') != null) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  // Intailization Of Form 
  intializeForm() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.pattern("^[0-9]*$")]),
      country_code: new FormControl('', [Validators.required])
    })
    
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email ]),
      password: new FormControl('', [Validators.required])
    })
 
  }

  // sign Up method
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
  // sign In Method
  signIn(data: any, clsBtn:HTMLElement) {
    this.service.loginApi(data).subscribe((result: any) => {
      console.log(result)
      clsBtn.click();
      console.log(result.data.token)
      sessionStorage.setItem('signUpToken', result.data.token);
      this.show=true;
      
      if(result.data.message){
        this.toastr.success(result.data.message);
      }
    })
  }
  showSuccess() {
   
  }

// Logout method

  logout(){
    sessionStorage.clear();
    window.location.reload();
  }
  hostYourStall(){
   setTimeout(() => {
    this.router.navigateByUrl('/host-your-stalls')
   }, 1000);
  }

  // get Data Form ALl user 

  getData() {
    this.service.getDataApi().subscribe((result: any) => {
      console.log(result);
      this.allData = result
      this.fName=result.data.attributes.profile.displayName;
      console.log(this.fName);
      this.bgImage = result.data.attributes.profile.publicData.profile_image;
      console.log(this.bgImage);
    })
  }
}
