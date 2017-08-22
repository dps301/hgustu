import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../services/http.service";
import { NoticeDetailPage } from "../notice-detail/notice-detail";

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})

export class NoticePage {
  notices: Array<any> = [];
  offset: number = 0;
  pageSize: number = 15;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  ionViewDidLoad() {
    this.getNotice();
  }

  getNotice() {
    this.http.get('/notice?offset=' + this.offset * this.pageSize + '&pageSize=' + this.pageSize)
    .subscribe(data =>{
      this.notices = data.json().data;
    });
  }

  detailNotice(title, content, regdate) {
    this.navCtrl.push(NoticeDetailPage, {title: title, content: content, regdate:regdate});
  } 

  doInfinite(infiniteScroll) {
    this.offset++;
    
    this.http.get('/notice?offset=' + this.offset * this.pageSize + '&pageSize=' + this.pageSize)
    .subscribe(data =>{
      this.notices = this.notices.concat(data.json().data);
      console.log(this.notices);
      infiniteScroll.complete();
    });
  }
}
