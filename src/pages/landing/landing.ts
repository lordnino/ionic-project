import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { SignUpPage } from '../sign-up/sign-up';
import { Storage } from '@ionic/storage';
import { IntroPage } from '../intro/intro';
/*
  Generated class for the Landing page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
    this.storage.get('page-intro').then(done => {
    if (!done) {
      this.storage.set('page-intro', true);
      this.navCtrl.setRoot(IntroPage);
    }
  });
  }

  goToSignUp(){
    this.navCtrl.push(SignUpPage);
  }

  goToSignIn(){
    this.navCtrl.push(SignInPage);
  }

}
