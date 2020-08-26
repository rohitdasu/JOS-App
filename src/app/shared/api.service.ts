import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl: string = "https://jos.icodexa.com";
  constructor(private http: HttpClient) {}
  public loginApi(email: string, password: string) {
    return this.http.post(this.apiUrl + "/api/login", {
      email: email,
      password: password,
    });
  }
  public registerApi(name, email, phone, password, confirm_password) {
    return this.http.post(this.apiUrl + "/api/signup", {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirm_password,
      phone: phone,
    });
  }
}
