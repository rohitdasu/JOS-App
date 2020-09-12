import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from 'src/app/shared/storage.service';

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
  celebrationPrice:number;
  result;

  constructor(private router: Router,private storage:StorageService) {
    this.customPickerOptions = {
      showBackdrop: true,
      animated: true,
    };
  }

  ngOnInit() {
    this.celebrationPrice = this.storage.getCelebrationPrice();
    this.result = this.personNum*this.celebrationPrice;
  }
  showDate(event: Event) {
    this.date = event["detail"].value;
  }
  gotoPayment() {
    this.router.navigate(["/payment",{price:this.result}]);
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
    this.result=this.personNum * this.celebrationPrice;
  }
}
