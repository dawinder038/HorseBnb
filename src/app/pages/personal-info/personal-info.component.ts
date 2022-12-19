import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
  aboutForm!: FormGroup;
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
  constructor(private service: HorseServiceService,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.intializeForm();
    this.getData();
  }

  intializeForm() {
    this.nameForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required])
    })

    this.genderForm = new FormGroup({
      gender: new FormControl('', [Validators.required]
      ),
    })
    this.DOBForm = new FormGroup({
      age: new FormControl('', [Validators.required]),
    })
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
    this.phoneForm = new FormGroup({
      country_code: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")])
    })
    this.languageForm = new FormGroup({
      language: new FormControl('', [Validators.required])
    })
    this.aboutForm = new FormGroup({
      bio: new FormControl('', [Validators.required])
    })
  }

  getData() {
    this.service.getDataApi().subscribe((result: any) => {
      console.log("reus", result);
      this.allData = result;
      this.nameForm.controls['firstName'].setValue(result.data.attributes.profile.firstName);
      this.nameForm.controls['lastName'].setValue(result.data.attributes.profile.lastName);
      this.genderForm.controls['gender'].setValue(result.data.attributes.profile.publicData.gender);
      this.DOBForm.controls['age'].setValue(result.data.attributes.profile.publicData.age);
      this.emailForm.controls['email'].setValue(result.data.attributes.email);
      this.phoneForm.controls['country_code'].setValue(result.data.attributes.profile.publicData.country_code);
      this.phoneForm.controls['phoneNumber'].setValue(result.data.attributes.profile.publicData.phoneNumber)
      this.bgImage = result.data.attributes.profile.publicData.profile_image;
      this.languageForm.controls['language'].setValue(result.data.attributes.profile.publicData.language)
    })
  }

  editName() {
    this.showName = false;
  }
  cancelName() {
    this.showName = true;
  }
  editGender() {
    this.showGender = false;
  }
  cancelGender() {
    this.showGender = true;
  }
  editDOB() {
    this.showDOB = false;
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
    this.showPhone = false;
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
      this.bgImage = 'https://shared2.fra1.digitaloceanspaces.com/Uploads/Images/Original/' + result.filename;
      this.updateImage();
      console.log(this.bgImage)
      this.getData();
     
    });
  }

  updateName(data: any) {
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName
    }
    this.service.currentUserUpdateProfile(payload).subscribe((result: any) => {
      console.log(result);
      this.toastr.success(result.data.message);
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
      this.toastr.success(result.data.message);
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
      this.toastr.success(result.data.message);
    })
  }

  updateEmail(data: any) {
    let payload = {
      publicData: {
        email: data.email,
      }
    }
    this.service.currentUserUpdateProfile(payload).subscribe((result: any) => {
      console.log(result);
      this.toastr.success(result.data.message);
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
      this.toastr.success(result.data.message);
    })
  }

  updateLanguage(data: any) {
    let payload = {
      publicData: {
        language: data.language
      }
    }
    this.service.currentUserUpdateProfile(payload).subscribe((result: any) => {
      console.log(result);
      this.toastr.success(result.data.message);
    })
  }

  updateAbout(data: any) {
    let payload = {
      bio: data.bio
    }
    console.log(payload)
    this.service.currentUserUpdateProfile(payload).subscribe((result: any) => {
      console.log(result);
      this.toastr.success(result.data.message);
    })
  }

  updateImage() {
    let payload = {
      publicData: {
        image: this.bgImage
      }
    }
    this.service.currentUserUpdateProfile(payload).subscribe((result: any) => {
      console.log(result);
      this.toastr.success(result.data.message);
    })
  }

}
