import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-create-guest-step7',
  templateUrl: './create-guest-step7.component.html',
  styleUrls: ['./create-guest-step7.component.scss']
})
export class CreateGuestStep7Component implements OnInit {
  myForm!: FormGroup;
  bgImage: any;
  imageArray: any[] = []
  id: any;
  imageId: any;
  constructor(private service: HorseServiceService, private route: ActivatedRoute, private router: Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  fileChange(event: any) {
    if(event){
      this.spinner.show();
    }
    this.service.uploadImage(event).subscribe((result: any) => {
      console.log(result);
      if(result.filename!=null){
        this.spinner.hide()
      }
      this.bgImage = 'https://shared2.fra1.digitaloceanspaces.com/Uploads/Images/Original/' + result.filename;
      this.imageArray.push({ "url": this.bgImage,caption:"caption",id:result.id,priority:0 });
      this.imageId = result.id;
      console.log(this.bgImage);
    });
  }
  removePhoto(data: any) {
    console.log(data);
    var index = this.imageArray.indexOf(data);
    if (index !== -1) {
      this.imageArray.splice(index, 1);
    }
  }

  //   editPhoto(data:any){
  //     var index = this.imageArray.indexOf(data);
  //  this.imageArray.splice(this.imageArray.indexOf(data), index,{ "url": this.bgImage,caption:"caption",id:this.imageId,priority:0 })
  //   }
  ownListingUpdate() {
    let payload = {
      id: this.id,
      publicData: {
        cover_photo:{
          caption:"caption",
          url:this.imageArray[0].url,
          id:this.imageArray[0].id,
        },
        images:this.imageArray,
      }
    }
    this.service.ownListingUpdateApi(payload).subscribe((result: any) => {
      console.log("image result", result);
      this.router.navigateByUrl("/create-guest/step8/" + this.id);
    })
  }
  
}
