import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { TermConditionsComponent } from '../term-conditions/term-conditions.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  allData: any;
  nameForm!: FormGroup;
  genderForm!: FormGroup;
  DOBForm!: FormGroup;
  emailForm!: FormGroup;
  phoneForm!: FormGroup;
  languageForm!: FormGroup;
  aboutForm!:FormGroup;
  showName: boolean = true;
  showGender: boolean = true;
  showDOB: boolean = true;
  showEmail: boolean = true;
  bgImage: any;
  showPhone: any = true;
  showAbout: any = true;
  showAddress: any = true;
  showLanguage: any = true;
  profilePayload: any = {};


  constructor(private service: HorseServiceService) { }

  ngOnInit(): void {
    this.intializeForm();
    this.getData();
  }
  getData() {
    this.service.getDataApi().subscribe((result: any) => {
      console.log(result);
      // debugger
      this.allData = result
    })
  }
  intializeForm() {
    this.nameForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required])
    })

    this.genderForm = new FormGroup({
      gender: new FormControl('',[Validators.required]
      ),
    })
    this.DOBForm = new FormGroup({
      age: new FormControl(''),
    })
    this.emailForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email])
    })
    this.phoneForm = new FormGroup({
      country_code: new FormControl(''),
      phoneNumber: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")])
    })
    this.languageForm = new FormGroup({
      language: new FormControl('')
    })
    this.aboutForm = new FormGroup({
      bio:new FormControl('')
    })
  }


  editName() {
    this.showName = false
  }
  cancelName() {
    this.showName = true
  }
  editGender() {
    this.showGender = false
  }
  cancelGender() {
    this.showGender = true;
  }
  editDOB() {
    this.showDOB = false
  }
  cancelDOB() {
    this.showDOB = true;
  }
  editEmail() {
    this.showEmail = false;
  }
  cancelEmail() {
    this.showEmail = true;
  }
  editPhone() {
    this.showPhone = false
  }
  cancelPhone() {
    this.showPhone = true;
  }
  editAbout() {
    this.showAbout = false;
  }
  cancelAbout() {
    this.showAbout = true;
  }
  editAddress() {
    this.showAddress = false;
  }
  cancelAddress() {
    this.showAddress = true;
  }

  editLanguage() {
    this.showLanguage = false;
  }
  cancelLanguage() {
    this.showLanguage = true;
  }
  fileChange(event: any) {
    this.service.uploadImage(event).subscribe((result: any) => {
      console.log(result);
      this.bgImage = 'https://airbnb-clone.henceforthsolutions.com:3001/v1/api/upload/aws/original/' + result.filename;
      console.log(this.bgImage);
    });

  }
  updateName(data: any) {
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName
    }
    console.log(payload)
    this.service.currentUserUpdateProfile(payload).subscribe((result: any) => {
      console.log(result);
    })
  }
  updateGender(data: any) {
    let payload = {
      publicData: {
        gender: data.gender
      }
    }
    this.service.currentUserUpdateProfile(payload).subscribe((result: any) => {
      console.log(result);
    })
  }
  updateDOB(data: any) {
    let payload = {
      publicData: {
        age: data.age
      }
    }
    this.service.currentUserUpdateProfile(payload).subscribe((result: any) => {
      console.log(result);
    })
  }

  updateEmail(data: any) {
    let payload = {
      publicData: {
        email: data.email
      }
    }
    this.service.currentUserUpdateProfile(payload).subscribe((result: any) => {
      console.log(result);
    })
  }
  updatePhone(data: any) {
    let payload = {
      protectedData: {
        phoneNumber: data.phoneNumber
      },
      publicData: {
        country_code: data.country_code
      }
    }
    this.service.currentUserUpdateProfile(payload).subscribe((result: any) => {
      console.log(result);
    })
  }

  updateLanguage(data: any) {
    let payload = {
      publicData: {
        language: data.language
      }
    }
    this.service.currentUserUpdateProfile(payload).subscribe((result:any)=>{
      console.log(result);
    })
  }
  updateAbout(data:any){
    let payload = {
      bio:data.bio
    }
    console.log(payload)
    this.service.currentUserUpdateProfile(payload).subscribe((result:any)=>{
      console.log(result);
    })
  }


}
