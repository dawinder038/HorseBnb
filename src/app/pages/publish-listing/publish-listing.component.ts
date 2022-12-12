import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-publish-listing',
  templateUrl: './publish-listing.component.html',
  styleUrls: ['./publish-listing.component.scss']
})
export class PublishListingComponent implements OnInit {

  id:any;
  constructor(private service:HorseServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  publishDraft(){
    let payload = {
      id:this.id
    }
    this.service.publishDraftApi(payload.id).subscribe((result:any)=>{
      console.log(result);
    })
  }

}
