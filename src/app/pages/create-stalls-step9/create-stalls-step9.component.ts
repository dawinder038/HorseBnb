import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-create-stalls-step9',
  templateUrl: './create-stalls-step9.component.html',
  styleUrls: ['./create-stalls-step9.component.scss']
})
export class CreateStallsStep9Component implements OnInit {
  showUpload:boolean=false;
bgImage:any;
id:any;
  constructor(private service:HorseServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  fileChange(event: any) {
    this.service.uploadImage(event).subscribe((result: any) => {
      console.log(result);
      this.bgImage = 'https://shared2.fra1.digitaloceanspaces.com/Uploads/Images/Original/' + result.filename;
      if(this.bgImage!=null){
        this.showUpload=true;
      }
    });
  }
  uploadImage(){
    let payload = {
      id:this.id,
      publicData:{
        host_image:this.bgImage,
      }
    }
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log(result);
    })
    this.router.navigateByUrl('/create-stalls/checkin-and-checkout/'+this.id);
  }
}
