import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent implements OnInit {
id:any;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.params['id']
  }


next(){
  this.router.navigateByUrl('/create-stalls/step7/'+this.id);
}

}
