import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-celebration",
  templateUrl: "./celebration.page.html",
  styleUrls: ["./celebration.page.scss"],
})
export class CelebrationPage implements OnInit {
  constructor(private router:Router) {}

  ngOnInit() {}
  gotoPayment(){
    this.router.navigate(['/payment']);
  }
}
