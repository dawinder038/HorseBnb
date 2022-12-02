import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-create-stalls-step9',
  templateUrl: './create-stalls-step9.component.html',
  styleUrls: ['./create-stalls-step9.component.scss']
})
export class CreateStallsStep9Component implements OnInit {
  showUpload:boolean=false;
bgImage:any;
  constructor(private service:HorseServiceService, ) { }

  ngOnInit(): void {
  }

  fileChange(event: any) {
    this.service.uploadImage(event).subscribe((result: any) => {
      console.log(result);
      this.bgImage = 'https://airbnbclone.sfo3.digitaloceanspaces.com/Uploads/Images/Original/' + result.filename;
      if(this.bgImage!=null){
        this.showUpload=true;
      }
    });
  }
}
