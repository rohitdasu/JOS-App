import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../pages/modal/modal.page";

import { IonRouterOutlet, Platform } from "@ionic/angular";
import { PushService } from '../shared/push.service';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit{
  slideOptions = {
    pager: false,
    slidesPerView: 1.1,
    autoplay: true,
    speed: 900,
    loop: true,
  };

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private platform: Platform,
    private push:PushService
  ) {}

  ngOnInit(){
    this.push.initPush();
  }

  async openDialog(img: string) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        img: img,
      },
    });
    return await modal.present();
  }
  gotoCelebration() {
    this.router.navigate(["/donate-now"]);
  }

  async openDialog1(img: string) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        img: img,
      },
    });
    return await modal.present();
  }
  gotoCelebration1() {
    this.router.navigate(["/donate-now"]);
  }
}
