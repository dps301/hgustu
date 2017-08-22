import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ShopPage } from '../shop/shop';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { CouponListPage } from '../coupon-list/coupon-list';
import { LoginPage } from '../login/login';
import { CalendarPage } from '../calendar/calendar';
import { ReservePage } from "../reserve/reserve";
// import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-container',
  templateUrl: 'container.html',
})
export class ContainerPage {
  page = [ReservePage,'','',CalendarPage,ShopPage];
  @ViewChild(Content) content: Content;

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
    "assets/images/container/4buttom_1-01.png",
    "assets/images/container/4bottom_2-01.png",
    "assets/images/container/4bottom_3-01.png",
    "assets/images/container/4bottom_4-01.png",
    "assets/images/container/4bottom_5-01.png",
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams
    // ,private iab: InAppBrowser
  ) {
  }

  ionViewDidLoad() {
    // this.navCtrl.push(CalendarPage);
  }

  ionViewDidEnter() {
    this.content.resize();
  }

  move(link) {
    this.navCtrl.push(this.page[link]);
    // switch (link) {
    //   case 1 : 
    //   case 2 : this.navCtrl.push(this.page[link]);
    //   break;
    //   // case 5 :const browser = this.iab.create('https://ionicframework.com/');
      
    // }
    
    }
  

  moveCoupon() {
    this.navCtrl.push(CouponListPage, {userNo:1});
  }
}
