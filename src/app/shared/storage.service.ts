import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  // private user = { id: 0, email: "Default", name: "Default", phone: 0 };
  private celebrationPrice;

  constructor(private api: ApiService) {}
  // setUserData(id, name, phone, email) {
  //   this.user = { id: id, email: email, name: name, phone: phone };
  // }

  setCelebrationPrice() {
    this.api.celebrationPrice().subscribe((val) => {
      this.celebrationPrice = val["responseData"].celebration_price;
    });
  }

  getCelebrationPrice(){
    return this.celebrationPrice;
  }

  getUserData1() {
    let x = JSON.parse(localStorage.getItem("userinfo"));
    return x;
  }
}
