import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-create-stalls-step3',
  templateUrl: './create-stalls-step3.component.html',
  styleUrls: ['./create-stalls-step3.component.scss'],
 
})
export class CreateStallsStep3Component implements OnInit {
  counter:any=0;
  constructor(private service:HorseServiceService) { }

  ngOnInit(): void {
    this.getData()
  }
  
  incCounter(){
       return this.counter = this.counter + 1;
  }
  decCounter(){
  if(this.counter>0){
    this.counter=this.counter - 1;
  }
    
}
getData() {
  this.service.getDataApi().subscribe((result: any) => {
    console.log(result);
  })
}
next(){
  sessionStorage.setItem('counter',this.counter)
  console.log(this.counter)
}

}
