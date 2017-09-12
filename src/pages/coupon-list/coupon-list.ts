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
  couponDetail: any = 0;
  couponDetail2: any = 0;
  name  = this.loginSession.getInfo().name
  stu_id  = this.loginSession.getInfo().stu_id
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService,
    private loginSession:LoginSession) {
  }

  ionViewDidLoad() {
    this.load();
    console.log('ionViewDidLoad CouponListPage');
  }

  load() {
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
    this.http.put('/coupon/use', {userNo: this.loginSession.getInfo().user_no, no: no})
    .subscribe(data =>{
      this.load();
      this.couponDetail = 0;
      this.couponDetail2 = 0
    })
  }
}
