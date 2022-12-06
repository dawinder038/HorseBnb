import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-successfull-hosting',
  templateUrl: './successfull-hosting.component.html',
  styleUrls: ['./successfull-hosting.component.scss']
})
export class SuccessfullHostingComponent implements OnInit {
  id:any;
  constructor(private service:HorseServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  next(){
this.router.navigateByUrl('/create-stalls/step11/1/'+this.id)
  }
}
