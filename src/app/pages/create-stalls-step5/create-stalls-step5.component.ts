import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';
@Component({
  selector: 'app-create-stalls-step5',
  templateUrl: './create-stalls-step5.component.html',
  styleUrls: ['./create-stalls-step5.component.scss']
})
export class CreateStallsStep5Component implements OnInit {
  id:any;
  constructor(private service:HorseServiceService ,private router:Router) { }

  ngOnInit(): void {
    this.ownListingUpdate()
  }
  ownListingUpdate(){
   let payload = {
    id:sessionStorage.getItem('id'),
    publicData:{
      stalls:sessionStorage.getItem('counter')
    }
   }
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log("listin",result);
    })
  }
}
