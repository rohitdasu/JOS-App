import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedIn = new BehaviorSubject(false);
  currentState = this.loggedIn.asObservable();

  constructor() {}
  addAuth(x: boolean) {
    this.loggedIn.next(x);
    localStorage.setItem("loggedIn",'true');
  }
}
