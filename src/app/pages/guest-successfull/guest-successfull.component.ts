import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorseServiceService } from 'src/app/@core/Services/horse-service.service';
@Component({
  selector: 'app-guest-successfull',
  templateUrl: './guest-successfull.component.html',
  styleUrls: ['./guest-successfull.component.scss']
})
export class GuestSuccessfullComponent implements OnInit {

  id: any;
  constructor(private service: HorseServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }
  next() {
    this.router.navigateByUrl('/create-guest/step11/1/' + this.id);
  }
}
