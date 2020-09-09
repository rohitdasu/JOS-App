import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"],
})

export class PaymentPage implements OnInit {
  price;
  private sub: any;
  userinfo;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.price = params.price;
    });
    this.userinfo = JSON.parse(localStorage.getItem('userinfo'));
    console.log(typeof this.userinfo.name);
  }
  upi(){
    const options = {
      "key": "rzp_live_F7MRsAes4qTmB8",
      "amount": this.price,
      "currency": "INR",
      "name": "JoyOfSharing",
      "description": "Please donate for the needy",
      "method":{
        "netbanking":false,
        "card":false,
        "upi":true,
        "wallet":false,
        "paylater":false,
      },
      "prefill": {
          "name": this.userinfo.name,
          "email": this.userinfo.email,
          "contact": this.userinfo.phone
      },
      "theme": {
          "color": "#ffc409"
      }
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
  }
}
