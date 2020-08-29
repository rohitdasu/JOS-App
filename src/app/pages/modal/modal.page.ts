import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"],
})
export class ModalPage implements OnInit {
  @Input() img: string;
  constructor(public modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
  gotoDetails() {
    this.dismiss();
    this.router.navigate(["/details"]);
  }
  gotoCelebration() {
    this.dismiss();
    this.router.navigate(["/donate-now"]);
  }
}
