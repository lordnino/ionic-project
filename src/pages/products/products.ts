import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';
/*
  Generated class for the Products page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public app:App
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  navProductDetails(){
    this.app.getRootNav().push(ProductDetailsPage);
  }
}
