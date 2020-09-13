import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { ApiService } from "src/app/shared/api.service";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.page.html",
  styleUrls: ["./forget-password.page.scss"],
})
export class ForgetPasswordPage implements OnInit {
  email: string;
  spinner: boolean;
  constructor(
    private router: Router,
    private api: ApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}
  gotoHome() {
    this.router.navigate(["/tabs/tab2"]);
  }
  forgetPassword() {
    this.spinner = true;
    this.api.forgetPassword(this.email).subscribe((val) => {
      this.spinner = false;
      if (val["status"] === "success") {
        const id = val["responseData"].id;
        this.presentToast("OTP has been sent, Please check your email!");
        this.router.navigate(["reset-password", { id: id }]);
      } else {
        this.presentToast("Something Went Wrong");
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
