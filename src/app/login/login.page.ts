import { Component, OnInit } from '@angular/core';

export class RegisterModel {
  UserId: any;
  Password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  register: RegisterModel =new RegisterModel;
  constructor() { }

  ngOnInit() {
  }
  setLoginData() {
 
    console.log('user password', this.register.UserId );
    console.log('user name:', this.register.Password );

  }
}
