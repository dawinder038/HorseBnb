import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-manage-listing',
  templateUrl: './manage-listing.component.html',
  styleUrls: ['./manage-listing.component.scss']
})
export class ManageListingComponent implements OnInit {
  totalData: any;
  p:any = 1;
 count:any;
  constructor(private service: HorseServiceService,private router:Router,private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ownListingQuery();
  }

    // Show All Listing's Data
  ownListingQuery() {
    this.service.ownListingQueryApi().subscribe((result: any) => {
      this.totalData = result.data;
      console.log(this.totalData);
      console.log("total-listing",result)
      this.count=result.count
    })
  }
  // Go To Publish Listing 
  goToPublish(id:any){
    this.router.navigateByUrl('/manage-listing/publish-listing/'+id)
  }
  pageChanged(event: any) {
// this.tableSize=event;
    // this.page=1;
    this.ownListingQuery();
  }

  editList(id:any){
    this.router.navigateByUrl('/create-your-stalls/step1/'+id);
  }

  previewList(id:any){
    this.router.navigateByUrl('/booking-details/'+id)
  }
}
