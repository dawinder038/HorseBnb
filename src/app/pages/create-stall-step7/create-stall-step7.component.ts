import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-create-stall-step7',
  templateUrl: './create-stall-step7.component.html',
  styleUrls: ['./create-stall-step7.component.scss']
})
export class CreateStallStep7Component implements OnInit {
myForm!:FormGroup;
bgImage :any;
imageArray:any [] = []
id:any;
  constructor(private service: HorseServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];  
  }
  fileChange(event: any) {
    this.service.uploadImage(event).subscribe((result: any) => {
      console.log(result);
      this.bgImage = 'https://airbnbclone.sfo3.digitaloceanspaces.com/Uploads/Images/Original/' + result.filename;
      this.imageArray.push({"url":this.bgImage});
      console.log(this.imageArray);
      console.log(this.bgImage);
    });
  }

  ownListingUpdate(){
   let payload = {
    id:this.id,
    publicData:{
      images:[{
        "url":this.imageArray[0].url,
        "caption":"caption",
        "priority":0,
        "id":0,
      }  
    ]
    }
    }
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.router.navigateByUrl("/create-stalls/step8/"+this.id);
    })
  }
  
}
