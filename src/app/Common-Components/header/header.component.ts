import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ServiceNameService } from 'src/app/@core/Services/horse-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signUpForm!: FormGroup;
  signInForm!: FormGroup;
  result: any;
  show: boolean = false;
  constructor(private service: ServiceNameService,private router:Router) {
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
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phoneNumber: new FormControl(''),
      country_code: new FormControl('')
    })

    this.signInForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
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
  signIn(data: any) {
    this.service.loginApi(data).subscribe((result: any) => {
      console.log(result);
      sessionStorage.setItem('signUpToken', result.data.token);
      let token=result.data.token
      this.show=true;
    })
  }
  logout(){
    sessionStorage.clear();
    window.location.reload();
  }

}
