import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-check-in-check-out',
  templateUrl: './check-in-check-out.component.html',
  styleUrls: ['./check-in-check-out.component.scss']
})
export class CheckInCheckOutComponent implements OnInit {
  mytime: Date = new Date();
  id:any;

  constructor(private service:HorseServiceService,private router:Router, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  next(){
    this.router.navigateByUrl("/create-stalls/successfull-hosting/"+this.id);
  }

}
