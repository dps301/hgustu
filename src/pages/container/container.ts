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
  page = ['','','',CalendarPage,ShopPage];
  main: Array<any> = ["assets/images/container/2button_1.png",
  "assets/images/container/2button_2.png",
  "assets/images/container/2button_3.png",
  "assets/images/container/2button_4.png",
  "assets/images/container/2button_5.png",
  "assets/images/container/2button_6.png",
  "assets/images/container/2button_7.png",
  "assets/images/container/2button_8.png",
  "assets/images/container/2button_9.png"
  ];
  footImg : Array<any> = [
    "assets/images/container/button_1.png",
    "assets/images/container/button_2.png",
    "assets/images/container/button_3.png",
    "assets/images/container/button_4.png",
    "assets/images/container/button_5.png",
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  move(link) {
    
    this.navCtrl.push(this.page[link]);
  }
  moveCoupon() {
    this.navCtrl.push(CouponListPage,{userNo:1});
  }

}
