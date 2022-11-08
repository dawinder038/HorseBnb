import { Component, OnInit } from '@angular/core';
import { ProgressbarConfig } from 'ngx-bootstrap/progressbar';

@Component({
  selector: 'app-create-stalls-step3',
  templateUrl: './create-stalls-step3.component.html',
  styleUrls: ['./create-stalls-step3.component.scss'],
 
})
export class CreateStallsStep3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter = 0;

  incCounter(){
       return this.counter = this.counter + 1;
  }
  decCounter(){
  if(this.counter>0){
    this.counter=this.counter - 1;
  }
    
}

}
