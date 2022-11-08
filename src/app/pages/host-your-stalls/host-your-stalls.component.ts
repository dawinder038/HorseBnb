import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-host-your-stalls',
  templateUrl: './host-your-stalls.component.html',
  styleUrls: ['./host-your-stalls.component.scss']
})
export class HostYourStallsComponent implements OnInit {

  constructor(private router:Router,private service:HorseServiceService) { }

  ngOnInit(): void {

  }
  getStarted(){
    this.service.getDataApi().subscribe((result:any)=>{
      console.log(result);
      setTimeout(() => {
        this.router.navigateByUrl('/create-your-stalls/step1')
      }, 1000);
    })
    
  }
}
