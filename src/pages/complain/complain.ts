import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComplainListPage } from "../complain-list/complain-list";
import { InAppBrowser } from "@ionic-native/in-app-browser";

/**
 * Generated class for the ComplainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complain',
  templateUrl: 'complain.html',
})
export class ComplainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplainPage');
  }
  list(){
    this.navCtrl.push(ComplainListPage);
  }
  moveBottom(link) {
    switch (link) { 
      case 0 : this.iab.create('https://pf.kakao.com/_fxmwxnd','_blank','location=no');
      break; 
      case 1: this.iab.create('http://pf.kakao.com/_KLbSu ','_blank','location=yes');
      break;
    }
  }
  
}
