import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShopPage } from '../shop/shop';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { CouponListPage } from '../coupon-list/coupon-list';
import { LoginPage } from '../login/login';
import { CalendarPage } from '../calendar/calendar';

@IonicPage()
@Component({
  selector: 'page-container',
  templateUrl: 'container.html',
})
export class ContainerPage {
  page = {"shop": ShopPage, "calendar": CalendarPage};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  move(link) {
    this.navCtrl.push(this.page[link]);
  }
  moveCoupon() {
    this.navCtrl.push(CouponListPage, {userNo:1});
  }
}
