import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ForgetPasswordPage } from '../forget-password/forget-password';
import { AuthLoginService } from '../auth/auth-login/auth-login.service';
/*
  Generated class for the SignIn page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInPage {

  sendLogin: any = {
    email : 'mouradashry@gmail.com',
    password: 'chawchaw',
    device_model: 'Gt5776',
    device_token: 'a65s4d',
    device_platform: 'Android',
    app_version: '2.0'
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authLoginService: AuthLoginService,
  ) {

  }

  ngOnInit(){
    console.log('init....');
    this.authLoginService.loginUser(this.sendLogin).subscribe(
      res => console.log(res)
    );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  ForgetPassword(){
    this.navCtrl.push(ForgetPasswordPage);
  }

  login(formValues){
    console.log(formValues);
    this.authLoginService.loginUser(this.sendLogin);
  }




}
