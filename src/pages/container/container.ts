import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopPage } from '../shop/shop';
import { ShopDetailPage } from '../shop-detail/shop-detail';

@IonicPage()
@Component({
  selector: 'page-container',
  templateUrl: 'container.html',
})
export class ContainerPage {
  rootPage: any = ShopDetailPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
