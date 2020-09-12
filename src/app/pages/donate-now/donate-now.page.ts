import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "src/app/shared/storage.service";

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
  price: number;
  constructor(private router: Router, private storage: StorageService) {}

  ngOnInit() {
    this.price = this.storage.getCelebrationPrice();
  }
  solid(event: any) {
    this.solidChecked = event["detail"].checked;
  }
  getPrice(event) {
    this.price = event["detail"].value;
    this.price = this.price * 10;
  }
  liquid(event: any) {
    this.liquidChecked = event["detail"].checked;
  }
  gotoPayment() {
    this.router.navigate(["/payment", { price: this.price }]);
  }
  showDate(event: Event) {
    this.date = event["detail"].value;
  }
  personVal(event: Event) {
    this.persons = event["detail"].value;
  }
}
