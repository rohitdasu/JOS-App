import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/shared/api.service";
import { AuthService } from "src/app/shared/auth.service";
import { ToastController } from "@ionic/angular";
import { StorageService } from "src/app/shared/storage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  spinner: boolean;
  constructor(
    private router: Router,
    private api: ApiService,
    private auth: AuthService,
    public toastController: ToastController,
    private storage: StorageService
  ) {}
  ngOnInit() {}
  gotoRegister() {
    this.router.navigate(["/register"]);
  }
  login() {
    this.spinner = true;
    this.api.loginApi(this.email, this.password).subscribe(
      (val) => {
        console.log(val);
        if (val["status"] == "success") {
          let id = val["user"].id;
          let phone = val["user"].phone;
          let email = val["user"].email;
          let name = val["user"].name;
          localStorage.setItem("userinfo", JSON.stringify(val["user"]));
          // this.storage.setUserData(id, name, phone, email);
          localStorage.setItem("access_token", val["access_token"]);
          localStorage.setItem("user_name", val["user"].name);
          this.auth.addAuth(true);
          this.spinner = false;
          this.router.navigate(["/tabs/tab3"]);
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
  gotoFp() {
    this.router.navigate(["/forget-password"]);
  }
}
