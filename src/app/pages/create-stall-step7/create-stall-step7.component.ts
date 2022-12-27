import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-create-stall-step7',
  templateUrl: './create-stall-step7.component.html',
  styleUrls: ['./create-stall-step7.component.scss']
})
export class CreateStallStep7Component implements OnInit {
  imageForm!: FormGroup;
  bgImage: any;
  imageArray: any[] = []
  id: any;
  listData: any[] = [];
  imageId: any;
  new: any[]=[];
  constructor(private service: HorseServiceService, private route: ActivatedRoute, private router: Router, private spinner: NgxSpinnerService,private toastr:ToastrService) {
  }
  ngOnInit(): void {
    this.intializeForm();
    this.id = this.route.snapshot.params['id'];
    this.ownListingShowId();
    // this.loader()

  }
  intializeForm() {
    this.imageForm = new FormGroup({
      image: new FormControl(''),
    })
  }
  fileChange(event: any) {
    if (event) {
      this.spinner.show()
    }
    this.service.uploadImage(event).subscribe((result: any) => {
      console.log(result);
      if (result.filename != null) {
        this.spinner.hide()
      }
      this.bgImage = 'https://shared2.fra1.digitaloceanspaces.com/Uploads/Images/Original/' + result.filename;
      this.imageArray.push({ "url": this.bgImage, caption: "caption", id: result.id, priority: 0 });
      this.imageId = result.id;
      console.log(this.bgImage);

    });
  }
  //   setValues(){
  // this.service.listingShowIdApi(this.id).subscribe((result:any)=>{
  //   console.log(result);
  // })
  // }
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
    if(false)
    {
      this.toastr.error('Select Cover photo','Error')
    }
    else{
      
      this.new=this.imageArray.filter((item)=>{
        if(item.url != this.imageArray[0].url){
          return item
        }
      })
      let payload = {
        id: this.id,
        publicData: {
          cover_photo: {
            caption: "caption",
            url: this.imageArray[0].url,
            id: this.imageArray[0].id,
          },
          images: this.new,
        }
      }
      this.service.ownListingUpdateApi(payload).subscribe((result: any) => {
        console.log("image result", result);
        this.router.navigateByUrl("/create-stalls/step8/" + this.id);
        // this.setValues();
      })
    }
  }

  ownListingShowId() {
    console.log(this.id)
    this.service.listingShowIdApi(this.id).subscribe((result: any) => {
      console.log("particular id data", result);
      this.listData = result.data.attributes.publicData.images;
      console.log(this.listData);
      this.imageArray = this.listData;
      console.log(this.imageArray)
    })
  }
}
