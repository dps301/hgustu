import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopPage } from '../shop/shop';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { CouponListPage } from '../coupon-list/coupon-list';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-container',
  templateUrl: 'container.html',
})
export class ContainerPage {
  rootPage: any = CouponListPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
