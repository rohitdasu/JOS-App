import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/api.service";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
  tnm;
  spinner=false;
  constructor(
    private router: Router,
    private api: ApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}
  gotoLogin() {
    this.router.navigate(["/login"]);
  }
  register() {
    this.spinner=true;
    this.api
      .registerApi(
        this.name,
        this.email,
        this.phone,
        this.password,
        this.confirm_password
      )
      .subscribe(
        (val) => {
          this.spinner=false;
          console.log(val);
          console.log(val["status"]);
          if (val["status"] == "success") {
            this.router.navigate(["/otp-verify"]);
          }
        },
        (err) => {
          this.spinner=false;
          this.presentToast(err["error"].error);
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
