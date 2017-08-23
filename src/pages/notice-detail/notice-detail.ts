import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notice-detail',
  templateUrl: 'notice-detail.html',
})
export class NoticeDetailPage {
  title: any;
  content: any;
  regdate: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('title');
    this.content = this.navParams.get('content');
    this.regdate = this.navParams.get('regdate');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticeDetailPage');
  }
  

}
