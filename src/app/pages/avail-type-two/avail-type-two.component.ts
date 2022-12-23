import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
@Component({
  selector: 'app-avail-type-two',
  templateUrl: './avail-type-two.component.html',
  styleUrls: ['./avail-type-two.component.scss']
})
export class AvailTypeTwoComponent implements OnInit {
  id: any;
  constructor(private service: HorseServiceService, private route: ActivatedRoute,private router:Router) { }
  modelDate: any;
  monthArray: any[] = [];
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  onOpenCalendar(container: any) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('month');
    setTimeout(() => {
      this.monthArray.push(this.modelDate);
      console.log(this.monthArray);
    }, 1500);

  }
  availabiltyExeption() {
    let payload = {
      listingId: this.id,
      start:this.modelDate,
      end: this.modelDate,
      seats: 0
    }
    this.service.availabilityExceptionApi(payload).subscribe((result: any) => {
      console.log(result);
    })
  }
  updateSlots(){
    let payload = {
      id:this.id,
      publicData:{
        monthsBlocked:this.monthArray,
      }
    }
    this.service.ownListingUpdateApi(payload).subscribe((result:any)=>{
      console.log(result);
      this.router.navigateByUrl('/create-stalls/step12/'+this.id);
    })
  }
}
