import { Component, OnInit } from '@angular/core';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-host-guests',
  templateUrl: './host-guests.component.html',
  styleUrls: ['./host-guests.component.scss']
})
export class HostGuestsComponent implements OnInit {

  constructor(private service:HorseServiceService) { }

  ngOnInit(): void {
   
  }

}
