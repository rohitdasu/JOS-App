import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../pages/modal/modal.page";

import { IonRouterOutlet, Platform } from "@ionic/angular";
import { Plugins } from "@capacitor/core";
const { App } = Plugins;

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  slideOptions = {
    pager: false,
    slidesPerView: 1.4,
    autoplay: true,
    speed: 900,
    loop: true,
  };

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet,
    private platform: Platform
  ) {
    // this.platform.backButton.subscribeWithPriority(-1, () => {
    //   if (!this.routerOutlet.canGoBack()) {
    //     App.exitApp();
    //   }
    // });
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
    this.router.navigate(["/tabs/tab1"]);
  }
}
