import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { LoginSession } from "../../services/loginSession";

@IonicPage()
@Component({
  selector: 'page-coupon-list',
  templateUrl: 'coupon-list.html',
})
export class CouponListPage {
  coupons: any = [];
  userNo: any;
  couponDetail: any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService,
    private loginSession:LoginSession) {
  }

  ionViewDidLoad() {
    this.load();
    console.log('ionViewDidLoad CouponListPage');
  }

  load() {
    this.userNo = this.navParams.get('userNo');
    this.http.get('/coupon?userNo='+this.loginSession.getInfo().user_no)
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
  useCoupon(no) {
    this.http.put('/coupon/use',{userNo:1,couponNo:no})
    .subscribe(data =>{
      this.load();
      this.couponDetail = 0;
    })
  }
}
