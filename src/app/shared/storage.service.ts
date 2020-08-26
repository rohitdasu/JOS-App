import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private user: any;
  constructor() {}
  setUserData(id, name, phone,email) {
    this.user = { id: id, email: email, name: name, phone: phone };
  }
  getUserData() {
    return this.user;
  }
}
