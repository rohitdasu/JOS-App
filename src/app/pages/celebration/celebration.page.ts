import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-celebration",
  templateUrl: "./celebration.page.html",
  styleUrls: ["./celebration.page.scss"],
})
export class CelebrationPage implements OnInit {
  solidChecked: boolean;
  liquidChecked: boolean;
  customPickerOptions: any;
  date: string;
  solidNum: number = 1;
  liquidNum: number = 1;
  personNum: number = 5;
  result:number=50;

  constructor(private router: Router) {
    this.customPickerOptions = {
      showBackdrop: true,
      animated: true,
    };
  }

  ngOnInit() {}
  showDate(event: Event) {
    this.date = event["detail"].value;
  }
  gotoPayment() {
    this.router.navigate(["/payment"]);
  }
  solid(event: any) {
    this.solidChecked = event["detail"].checked;
  }
  liquid(event: any) {
    this.liquidChecked = event["detail"].checked;
  }
  solidVal(event: Event) {
    this.solidNum = event["detail"].value;
  }
  liquidVal(event: Event) {
    this.liquidNum = event["detail"].value;
  }
  personVal(event: Event) {
    this.personNum = event["detail"].value;
    this.result=this.personNum * 10;
  }
}
