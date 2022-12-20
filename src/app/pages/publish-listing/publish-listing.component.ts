import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-publish-listing',
  templateUrl: './publish-listing.component.html',
  styleUrls: ['./publish-listing.component.scss']
})
export class PublishListingComponent implements OnInit {

  id:any;
  constructor(private service:HorseServiceService,private route:ActivatedRoute,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.listingShowId();
    this.id = this.route.snapshot.params['id'];
  }
  listingShowId(){
    let payload = {
      id:this.id,
    }
    this.service.listingShowIdApi(payload.id).subscribe((result:any)=>{
      console.log("id info",result);
    })
  }
  publishDraft(){
    let payload = {
      id:this.id,
    }
   this.service.publishDraftApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.toastr.success('Successfully','Published');
      this.router.navigateByUrl('/manage-listing');      
    })
  }
}
