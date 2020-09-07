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
  date: any;
  personNum = 1;
  persons: any;

  constructor(private router: Router) {}

  ngOnInit() {}
  solid(event: any) {
    this.solidChecked = event["detail"].checked;
  }
  liquid(event: any) {
    this.liquidChecked = event["detail"].checked;
  }
  gotoPayment() {
    this.router.navigate(["/payment"]);
  }
  showDate(event: Event) {
    this.date = event["detail"].value;
  }
  personVal(event: Event) {
    this.persons = event["detail"].value;
  }
}
