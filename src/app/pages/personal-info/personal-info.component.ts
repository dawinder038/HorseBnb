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
  DOBForm!:FormGroup;
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
      console.log(result.data.attributes.profile.publicData.gender);
      this.allData = result
    })
  }
  intializeForm() {
    this.nameForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    })

    this.genderForm = new FormGroup({
      gender: new FormControl(''),
    })
    this.DOBForm = new FormGroup({
      age:new FormControl(''),
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
  // fileChange(event: any) {
  //   this.service.uploadImage(event).subscribe((result: any) => {
  //     console.log(result);
  //     this.bgImage = 'http://139.59.47.49:4004/' + result.filename;
  //   });

  // }
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
    this.service.currentUserUpdateProfile(payload).subscribe((result:any)=>{
      console.log(result);
    })
  }


}
