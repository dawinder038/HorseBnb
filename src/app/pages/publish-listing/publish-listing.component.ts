import { Component, OnInit ,TemplateRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-publish-listing',
  templateUrl: './publish-listing.component.html',
  styleUrls: ['./publish-listing.component.scss']
})
export class PublishListingComponent implements OnInit {

  id:any;
  info:any;
  eid: any;
  modalRef?: BsModalRef;
  message?: string; 
 
  constructor(private service:HorseServiceService,private route:ActivatedRoute,private router:Router,private toastr:ToastrService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.listingShowId();
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.publishDraft();
    this.modalRef?.hide();

  }
 
  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }
  listingShowId(){
    setTimeout(() => {
      let payload = {
        id:this.id,
      }
      this.service.listingShowIdApi(payload.id).subscribe((result:any)=>{
        console.log("id info",result);
      this.info = result.data;
      this.eid=this.info.id.uuid;
      console.log(this.eid);
      })
    }, 1000);
  }
  // Publish Listing
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
  edit(id:any){
    this.router.navigateByUrl('/create-your-stalls/step1/'+id);
  }
}
