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
  page: number = 1;
  count: number = 0;
  tableSize:number = 10;
  // label: String = ""
  constructor(private service: HorseServiceService,private router:Router,private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ownListingQuery();
  }

    // Show All Listing's Data
  ownListingQuery() {
    this.service.ownListingQueryApi().subscribe((result: any) => {
      this.totalData = result.data;
      console.log(this.totalData);
      console.log("total-listing",result);
    })
  }
  // Go To Publish Listing 
  goToPublish(id:any){
    this.router.navigateByUrl('/manage-listing/publish-listing/'+id)
  }
  pageChanged(event: any) {
    this.tableSize = event.target.value
    this.page = 1;
    this.ownListingQuery();
  }

  editList(id:any){
    this.router.navigateByUrl('/create-your-stalls/step1/'+id);
  }

  previewList(id:any){
    this.router.navigateByUrl('/booking-details/'+id)
  }
}
