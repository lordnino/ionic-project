import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MerchantInfoPage } from '../merchant-info/merchant-info'
/*
  Generated class for the ProductDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

  navMerchantInfo(){
    this.navCtrl.push(MerchantInfoPage);
  }
}
