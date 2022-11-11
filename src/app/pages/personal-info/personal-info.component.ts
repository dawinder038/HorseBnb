import { Component, OnInit } from '@angular/core';
import { TermConditionsComponent } from '../term-conditions/term-conditions.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  showName: boolean = true;
  showGender: boolean = true;
  showDOB: boolean = true;
  showEmail: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  editName() {
    this.showName = false
  }
  cancelName() {
    this.showName = true
  }
  editGender() {
    this.showGender = false
  }
  cancelGender() {
    this.showGender = true;
  }
  editDOB() {
    this.showDOB = false
  }
  cancelDOB() {
    this.showDOB = true;
  }
  editEmail() {
    this.showEmail = false;
  }
  cancelEmail() {
    this.showEmail = true;
  }

}
