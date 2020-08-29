import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name:string;
  email:string;
  phone:string;
  password:string;
  confirm_password:string;
  constructor(private router:Router,private api:ApiService) { }

  ngOnInit() {
  }
  gotoLogin(){
    this.router.navigate(['/login']);
  }
  register(){
    this.api.registerApi(this.name,this.email,this.phone,this.password,this.confirm_password).subscribe(val=>console.log(val));
  }
  gotoHome(){
    this.router.navigate(['/tabs/tab2']);
  }
}
