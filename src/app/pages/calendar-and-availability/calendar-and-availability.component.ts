import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar-and-availability',
  templateUrl: './calendar-and-availability.component.html',
  styleUrls: ['./calendar-and-availability.component.scss']
})
export class CalendarAndAvailabilityComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
}
