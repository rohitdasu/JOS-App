import { Component } from "@angular/core";

import { Platform, MenuController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./shared/auth.service";
import { Router } from "@angular/router";
import { PushService } from "./shared/push.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router,
    public menuCtrl: MenuController,
    private push: PushService
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

  logout() {
    this.auth.addAuth(false);
    this.menuCtrl.toggle();
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_name");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userinfo");
    this.router.navigate(["/tabs/tab2"]);
  }
}
