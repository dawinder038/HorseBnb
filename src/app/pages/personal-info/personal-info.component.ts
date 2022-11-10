import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
show:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.show=false
  }
  cancel(){
    this.show=true

  }

}
