import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-celebration",
  templateUrl: "./celebration.page.html",
  styleUrls: ["./celebration.page.scss"],
})
export class CelebrationPage implements OnInit {
  constructor(private router: Router) {}
  solidChecked: boolean;
  liquidChecked: boolean;
  ngOnInit() {}
  gotoPayment() {
    this.router.navigate(["/payment"]);
  }
  solid(event: any) {
    this.solidChecked = event["detail"].checked;
    console.log(this.solidChecked);
  }
  liquid(event:any){
    this.liquidChecked = event["detail"].checked;
    console.log(this.liquidChecked);
  }
}
