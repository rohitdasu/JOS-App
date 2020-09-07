import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private user = { id: 0, email: "Default", name: "Default", phone: 0 };
  constructor() {}
  setUserData(id, name, phone, email) {
    this.user = { id: id, email: email, name: name, phone: phone };
  }

  getUserData1() {
    let x = JSON.parse(localStorage.getItem("userinfo"));
    return x;
  }
}
