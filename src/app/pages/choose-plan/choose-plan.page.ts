import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-choose-plan",
  templateUrl: "./choose-plan.page.html",
  styleUrls: ["./choose-plan.page.scss"],
})
export class ChoosePlanPage implements OnInit {
  plan1;
  plan2;
  plan3;
  plan4;
  price;

  slideOptions = {
    pager: false,
    slidesPerView: 2.2,
  };

  constructor(private router: Router) {}

  ngOnInit() {}
  gotoPayment() {
    this.router.navigate(["/payment", { price: this.price }]);
  }
  select(val: string) {
    if (val == "1") {
      this.plan1 = true;
      this.plan2 = false;
      this.plan3 = false;
      this.plan4 = false;
      this.price = "500";
    }
    if (val == "2") {
      this.plan1 = false;
      this.plan2 = true;
      this.plan3 = false;
      this.plan4 = false;
      this.price = "200";
    }
    if (val == "3") {
      this.plan1 = false;
      this.plan2 = false;
      this.plan3 = true;
      this.plan4 = false;
      this.price = "100";
    }
    if (val == "4") {
      this.plan1 = false;
      this.plan2 = false;
      this.plan3 = false;
      this.plan4 = true;
      this.price = "50";
    }
  }
}
