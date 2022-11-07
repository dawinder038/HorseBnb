import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor (private service:HorseServiceService) {}
  ngOnInit(): void {
    this.getData()
  }

  getData(){
      this.service.getDataApi().subscribe((result:any)=>{
        console.log(result)
      })
    }
 
}
