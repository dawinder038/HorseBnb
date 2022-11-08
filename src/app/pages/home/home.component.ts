import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showStall: any;
  horseStallShow: any;
  horseAccomoShow: any = false;
  constructor(private service: HorseServiceService) { }
  ngOnInit(): void {
    this.getData()
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

}
