import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-experience-step7',
  templateUrl: './add-experience-step7.component.html',
  styleUrls: ['./add-experience-step7.component.scss']
})
export class AddExperienceStep7Component implements OnInit {

  dayArray: any[] = [
    {type:"checkbox",day:"Sunday",id:0},
    {type:"checkbox",day:"Monday",id:1},
    {type:"checkbox",day:"Tuesday",id:2},
    {type:"checkbox",day:"Wednesday",id:3},
    {type:"checkbox",day:"Thursday",id:4},
    {type:"checkbox",day:"Friday",id:5},
    {type:"checkbox",day:"Saturday",id:6},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
