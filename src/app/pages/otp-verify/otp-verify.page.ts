import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/api.service";
import { AuthService } from "src/app/shared/auth.service";
import { ToastController } from "@ionic/angular";
import { StorageService } from "src/app/shared/storage.service";

@Component({
  selector: "app-otp-verify",
  templateUrl: "./otp-verify.page.html",
  styleUrls: ["./otp-verify.page.scss"],
})
export class OtpVerifyPage implements OnInit {
  email: string;
  otp: string;
  spinner: boolean;
  constructor(
    private router: Router,
    private api: ApiService,
    private auth: AuthService,
    public toastController: ToastController,
    private storage: StorageService
  ) {}
  ngOnInit() {}
  verify() {
    this.spinner = true;
    this.api.verifyOtpApi(this.email, this.otp).subscribe(
      (val) => {
        console.log(val);
        if (val["status"] === "failure") {
          this.spinner = false;
          this.presentToast("Something went wrong!");
        } else {
          this.spinner = false;
          localStorage.setItem('userinfo',JSON.stringify(val["responseData"]));
          this.auth.addAuth(true);
          this.router.navigate(["/tabs/tab2"]);
        }
      },
      (err) => {
        this.spinner = false;
        this.presentToast(err["error"].message);
      }
    );
  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      position: "middle",
      duration: 2000,
    });
    toast.present();
  }
  gotoHome() {
    this.router.navigate(["/tabs/tab2"]);
  }
}
