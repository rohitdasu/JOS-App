import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-donate-now",
  templateUrl: "./donate-now.page.html",
  styleUrls: ["./donate-now.page.scss"],
})
export class DonateNowPage implements OnInit {
  solidChecked;
  liquidChecked;
  constructor(private router: Router) {}

  ngOnInit() {}
  solid(event: any) {
    this.solidChecked = event["detail"].checked;
    console.log(this.solidChecked);
  }
  liquid(event: any) {
    this.liquidChecked = event["detail"].checked;
    console.log(this.liquidChecked);
  }
  gotoPayment() {
    this.router.navigate(["/payment"]);
  }
}
