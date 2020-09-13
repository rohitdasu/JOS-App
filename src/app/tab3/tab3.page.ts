import { Component, OnInit } from "@angular/core";
import { StorageService } from "../shared/storage.service";
import { User } from "../models/user";
import { ApiService } from "../shared/api.service";
import { ToastController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  x: boolean = true;
  user: User;
  name;
  email;
  phone;
  constructor(
    private storage: StorageService,
    private api: ApiService,
    private toastCtrl: ToastController,
    private router:Router
  ) {}
  ngOnInit() {
    this.user = this.storage.getUserData1();
    this.name = this.user.name;
    this.email = this.user.email;
    this.phone = this.user.phone;
  }
  profileUpdate() {
    this.api
      .profileUpdate(this.name, this.email, this.phone)
      .subscribe((val) => {
        localStorage.setItem("userinfo", JSON.stringify(val["responseData"]));
        if (val["status"] === "success") {
          this.user = this.storage.getUserData1();
          this.presentToast("Profile Update Success!");
        } else {
          this.presentToast("Something went wrong!");
        }
      });
  }
  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: "middle",
      duration: 2000,
    });
    toast.present();
  }
  gotoChangePassword() {
    this.router.navigate(["change-password"]);
  }
}
