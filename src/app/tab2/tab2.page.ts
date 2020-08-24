import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from "@angular/material/dialog";
import { ModalController } from "@ionic/angular";
import { ModalPage } from '../pages/modal/modal.page';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    public modalController: ModalController
  ) {}

  async openDialog(img:string) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'img': img,
      }
    });
    return await modal.present();
  }
}
