import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../services/http.service";
import { NoticeDetailPage } from "../notice-detail/notice-detail";

/**
 * Generated class for the NoticePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {
  notices;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticePage');
    this.http.get('/notice?offset=0&pageSize=7')
    .subscribe(data =>{
      this.notices = data.json().data;
    })
  }
  detailNotice(title, content, regdate) {
    this.navCtrl.push(NoticeDetailPage, {title:title,content:content,regdate:regdate});
  }

}
