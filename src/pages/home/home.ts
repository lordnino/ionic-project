import { Component } from '@angular/core';
import { NavController, Platform, NavParams, ModalController, ViewController } from 'ionic-angular';

/* import tabs */
import { MerchantsPage } from '../merchants/merchants';
import { ProductsPage } from '../products/products';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root:any = MerchantsPage;
  tab2Root:any = ProductsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
