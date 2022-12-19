import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-successfull-hosting',
  templateUrl: './successfull-hosting.component.html',
  styleUrls: ['./successfull-hosting.component.scss']
})
export class SuccessfullHostingComponent implements OnInit {
  id: any;
  constructor(private service: HorseServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  successfullHosting() {
    this.service.listingShowIdApi(this.id).subscribe((result: any) => {
      console.log(result);
      console.log(result.data.attributes.publicData.type);
      if(result.data.attributes.publicData.type==1){
        this.router.navigateByUrl('/create-stalls/step11/'+result.data.attributes.publicData.type +'/' +this.id);
      }
      if(result.data.attributes.publicData.type==2){
        this.router.navigateByUrl('/create-stalls/availabilty/' +result.data.attributes.publicData.type + '/' + this.id);
      }
    })
  }
}
