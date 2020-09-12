import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"],
})
export class PaymentPage implements OnInit {
  price;
  paymentPrice;
  private sub: any;
  userinfo;
  constructor(private route: ActivatedRoute,private toastCtrl:ToastController) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.price = params.price;
      this.paymentPrice = this.price * 100;
    });
    this.userinfo = JSON.parse(localStorage.getItem("userinfo"));
  }
  upi() {
    const options = {
      key: "rzp_live_F7MRsAes4qTmB8",
      amount: this.paymentPrice,
      currency: "INR",
      name: "JoyOfSharing",
      description: "Please donate for the needy",
      method: {
        netbanking: false,
        card: false,
        upi: true,
        wallet: false,
      },
      "handler": function (response){
        this.presentToast(JSON.stringify(response));
    },
      prefill: {
        name: this.userinfo.name,
        email: this.userinfo.email,
        contact: this.userinfo.phone,
      },
      theme: {
        color: "#ffc409",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }
  async presentToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: "middle",
      duration: 4000,
    });
    toast.present();
  }
}
