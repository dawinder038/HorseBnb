import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showStall: any;
  horseStallShow: any;
  shortTerm: any=[];
  guestAccomo: any =[];
  id:any;
  showMore:boolean = false;
  monthlyData: any;
  horseAccomoShow: any = false;
  url='https://shared2.fra1.digitaloceanspaces.com/Uploads/Images/Original/'
  constructor(private service: HorseServiceService, private router: Router,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData()
    this.shortTermStalls();
    this.guestStalls();
    this.monthlyStalls();
    this.adventureStalls();
  }
  //Get All Data Form Api
  getData() {
    this.service.getDataApi().subscribe((result: any) => {
      console.log(result);
    })
  }

  trimString(text:any,length:any) {
    return text.length > length ?
      text.substring(0, length) + '...' :
      text;
  }

// monthly Boared Method
  showMonthlyFun() {
    this.showStall = true;
    this.horseStallShow = true;
    this.horseAccomoShow = false;
  }
  showShortTermFun() {
    this.showStall = false;
    this.horseStallShow = true;
    this.horseAccomoShow = false;
  }

  showGuestAccomodationsFun() {
    this.showStall = false;
    this.horseStallShow = false;
    this.horseAccomoShow = false;
  }

  horseAdventuresFun() {
    this.horseAccomoShow = true;
  }

  shortTermStalls() {
    let payload = {
      type: 1,
      perPage: 8,
      page: 1

    }
    // console.log("payload",payload)
    this.service.listingQueryApi(payload).subscribe((result: any) => {
   
      console.log("short term", result);
      console.log("payload",payload);
      this.shortTerm = result.data;
    })
  }

  guestStalls() {
    let payload = {
      perPage: 8,
      type: 4,
      page: 1
    }
    this.service.listingQueryApi(payload).subscribe((result: any) => {
      console.log("ss", result);
      this.guestAccomo = result.data;
    })
  }

  monthlyStalls() {
    let payload = {
      type: 2,
      perPage: 8,
      page: 1
    }
    this.service.listingQueryApi(payload).subscribe((result: any) => {
      console.log(result);
      this.monthlyData = result.data;
    })
  }

  adventureStalls() {
    let payload = {
      type: 3,
      perPage: 8,
      page: 1
    }
    this.service.listingQueryApi(payload.type).subscribe((result: any) => {
      console.log(result);
    })
  }
  bookingDetails(id:any){
    this.router.navigateByUrl('/booking-details/'+id);
  }
}
