import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';

/**
 * Generated class for the CouponListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coupon-list',
  templateUrl: 'coupon-list.html',
})
export class CouponListPage {
  coupons:any =[];
  userNo:any;
  couponDetail:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  ionViewDidLoad() {
    this.load();
    console.log('ionViewDidLoad CouponListPage');
  }

  load() {
    this.userNo = this.navParams.get('userNo');
    this.http.get('/coupon?userNo='+this.userNo)
    .subscribe(data =>{
        this.coupons = data.json();
    })
  }
  detail(coupon) {
    this.couponDetail = coupon
  }
  dt(date) {
    return date.substring(0, 10)
  }
}
