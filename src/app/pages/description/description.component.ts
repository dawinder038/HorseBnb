import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
myForm!:FormGroup;
  constructor(private service:HorseServiceService, private route:ActivatedRoute , private router:Router ) { }
id:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  next(){
    this.router.navigateByUrl('/create-stalls/step9/'+this.id);
  }
}
