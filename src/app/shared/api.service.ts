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

  public celebrationPrice() {
    return this.http.get(this.apiUrl + "/api/celebration-price");
  }

  public profileUpdate(name, email, phone) {
    let x = {
      name: name,
      email: email,
      phone: phone,
    };
    return this.http.post(this.apiUrl + "/api/profile/update", x, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
  }

  public changePassword(old_password, password, confirm_password) {
    let x = {
      old_password: old_password,
      password: password,
      password_confirmation: confirm_password,
    };
    return this.http.post(this.apiUrl + "/api/change-password", x, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
  }

  public forgetPassword(email) {
    let x = {
      email: email,
    };
    return this.http.post(this.apiUrl + "/api/forgot/password", x);
  }

  public resetPassword(id, password, confirm_password, otp) {
    let x = {
      user_id: id,
      password: password,
      password_confirmation: confirm_password,
      otp: otp,
    };
    return this.http.post(this.apiUrl + "/api/reset/password", x);
  }

  public getPlans() {
    return this.http.get(this.apiUrl + "/api/plans");
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

  public verifyOtpApi(email, otp) {
    return this.http.post(this.apiUrl + "/api/otpverify", {
      email: email,
      otp: otp,
    });
  }
}
