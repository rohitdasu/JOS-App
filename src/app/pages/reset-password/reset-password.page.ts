import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { ApiService } from "src/app/shared/api.service";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.page.html",
  styleUrls: ["./reset-password.page.scss"],
})
export class ResetPasswordPage implements OnInit {
  password;
  confirm_password;
  otp;
  spinner;
  sub;
  id;

  constructor(
    private router: Router,
    private api: ApiService,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params.id;
    });
  }
  gotoHome() {
    this.router.navigate(["/tabs/tab2"]);
  }
  resetPassword() {
    this.spinner=true;
    this.api
      .resetPassword(this.id, this.password, this.confirm_password, this.otp)
      .subscribe((val) => {
        this.spinner=false;
        console.log(val);
        if (val["status"] === "success") {
          this.presentToast('Password Reset Successful!')
          this.router.navigate(["/login"]);
        } else {
          this.presentToast("Failed!");
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
