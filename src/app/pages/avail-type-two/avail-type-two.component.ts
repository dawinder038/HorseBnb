import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avail-type-two',
  templateUrl: './avail-type-two.component.html',
  styleUrls: ['./avail-type-two.component.scss']
})
export class AvailTypeTwoComponent implements OnInit {

  constructor() { }
  modelDate:any;
  monthArray:any[]=[];
  ngOnInit(): void {
  }
  
  onOpenCalendar(container:any) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };     
    container.setViewMode('month');
    this.monthArray.push(this.modelDate);
    console.log(this.monthArray);
  }

}
