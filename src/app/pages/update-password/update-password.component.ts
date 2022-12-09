import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  passwordShow:boolean = false;
  updatePasswordForm!:FormGroup;
  constructor(private service:HorseServiceService) { }

  ngOnInit(): void {
    this.intializeForm();
  }
  intializeForm(){
    this.updatePasswordForm = new FormGroup({
      currentPassword:new FormControl(''),
      newPassword:new FormControl(''),
      confirmPassword:new FormControl('')
    })
  }
  updatePassword(data:any){
    console.log(data)
    let payload = {
      currentPassword:data.currentPassword,
      newPassword:data.newPassword
    }
    if(data.newPassword !== data.confirmPassword){
      console.log("does not match")
    }
    else{
      console.log("match")
    }
    this.service.changePasswordApi(payload).subscribe((result:any)=>{
      console.log(result);
    })
  }
  showPasswordBox(){
    this.passwordShow=true;
  }
  hidePasswordBox(){
    this.passwordShow = false;
  }
  
}








