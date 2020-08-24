import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-choose-plan",
  templateUrl: "./choose-plan.page.html",
  styleUrls: ["./choose-plan.page.scss"],
})
export class ChoosePlanPage implements OnInit {
  slideOptions = {
    pager: false,
    slidesPerView: 2.2,
    loop: true,
  };

  constructor(private router:Router) {}

  ngOnInit() {}
  gotoPayment(){
    this.router.navigate(['/payment']);
  }
}
