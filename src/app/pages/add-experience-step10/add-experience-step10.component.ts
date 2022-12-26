import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-experience-step10',
  templateUrl: './add-experience-step10.component.html',
  styleUrls: ['./add-experience-step10.component.scss']
})
export class AddExperienceStep10Component implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  singleDay() {
    this.router.navigateByUrl('/add-experience/step7/' + this.id);
  }
  
  multipleDay(){
    this.router.navigateByUrl('/add-experience/step8/'+this.id);
  }
}
