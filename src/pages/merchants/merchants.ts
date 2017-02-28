import { Component } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

/*
  Generated class for the Merchants page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-merchants',
  templateUrl: 'merchants.html'
})
export class MerchantsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public content:Content) {}

  scrollToTop() {
    this.content.scrollToTop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MerchantsPage');
  }

}
