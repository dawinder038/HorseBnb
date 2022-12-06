import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showStall: any;
  horseStallShow: any;
  shortTerm:any;
  guestAccomo:any;
  horseAccomoShow: any = false;
  constructor(private service: HorseServiceService , private router:Router) { }
  ngOnInit(): void {
    this.getData()
    this.shortTermStalls();
    this.guestStalls();
  }

  getData() {
    this.service.getDataApi().subscribe((result: any) => {
      console.log(result)
    })
  }

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

  shortTermStalls(){
    let payload = {
      type :1,
    }
    this.service.listingQueryApi(payload.type).subscribe((result:any)=>{
      console.log("short term",result);
      this.shortTerm = result.data
      console.log(this.shortTerm[0].attributes.description)
    })
  }

  guestStalls(){
    let payload = {
      type :4,
    }
    this.service.listingQueryApi(payload.type).subscribe((result:any)=>{
      console.log("ss",result);
      this.guestAccomo = result.data;
    })
  }

}
