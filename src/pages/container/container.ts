import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ShopPage } from '../shop/shop';
import { ShopDetailPage } from '../shop-detail/shop-detail';
import { CouponListPage } from '../coupon-list/coupon-list';
import { LoginPage } from '../login/login';
import { CalendarPage } from '../calendar/calendar';
import { ReservePage } from "../reserve/reserve";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NoticePage } from "../notice/notice";
import { ComplainPage } from "../complain/complain";
import { FormPage } from "../form/form";
import { ToastController, Slides } from 'ionic-angular';
import { HttpService } from "../../services/http.service";
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-container',
  templateUrl: 'container.html',
})
export class ContainerPage {
  @ViewChild(Content) content: Content;
  @ViewChild(Slides) slides: Slides;
  page = [ReservePage,NoticePage,ComplainPage,CalendarPage,ShopPage,'','',FormPage];
  imgData: Array<any> = [];
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
  mainImg: string = null;
  mainImgIdx: number = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser,private toastCtrl: ToastController, private http:HttpService) {
  }

  ionViewDidLoad() {
    this.http.get('/mainImg')
    .subscribe(
      d => {
        let img = d.json();
        for(let i = 0 ; i < img.length; i++) {
          this.imgData.push({img: img[i].img});
        }
        
        if(this.imgData.length > 0) {
          this.mainImg = this.imgData[this.mainImgIdx].img;
          setInterval(
            () => {
              this.mainImg = this.imgData[this.mainImgIdx].img;
              this.mainImgIdx++;
              if(this.mainImgIdx == this.imgData.length)
                this.mainImgIdx = 0;
            },
            5000
          );
        }
        else {
          this.mainImg = 'assets/images/hgu.jpg';
        }
      }
    );
  }

  move(link) {
    switch (link) { 
      case 5: this.iab.create('http://seal.handong.edu/','_blank','location=yes');
      break;
      case 6: 
      this.presentToast();
      // this.iab.create('http://pedia.cafe24app.com/','_blank','location=yes');
      break;
      case 8: this.presentToast();
      break;
      default : this.navCtrl.push(this.page[link]);
    }
  }

  moveBottom(link) {
    switch (link) { 
      case 0 : this.iab.create('http://stu.handong.edu/bus/ctest_week.php','_blank','location=no');
      break; 
      case 1: this.iab.create('https://www.facebook.com/hgustugov/','_blank','location=yes');
      break;
      case 2: this.iab.create('http://stu.handong.edu/','_blank','location=yes');
      break;
      case 3: window.open("tel:" + '0542601631', '_system', 'location=yes');
      break;
      case 4: this.moveCoupon();
      break;
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '준비중인 서비스입니다.',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  moveCoupon() {
    this.navCtrl.push(CouponListPage);
  }

  resize() {
    this.content.resize();
  }
}
