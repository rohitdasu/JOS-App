import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { ApiService } from "src/app/shared/api.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.page.html",
  styleUrls: ["./change-password.page.scss"],
})
export class ChangePasswordPage implements OnInit {
  password;
  confirm_password;
  old_password;
  spinner: boolean = false;

  constructor(
    private api: ApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}
  changePassword() {
    this.spinner = true;
    this.api
      .changePassword(this.old_password, this.password, this.confirm_password)
      .subscribe((val) => {
        this.spinner = false;
        if (val["status"] === "success") {
          this.password = "";
          this.confirm_password = "";
          this.old_password = "";
          this.presentToast("Password Changed!");
        } else {
          this.presentToast("Password Not Changed!");
        }
      });
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      position: "middle",
      duration: 2000,
    });
    toast.present();
  }
}
