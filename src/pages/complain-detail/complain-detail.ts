import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComplainDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complain-detail',
  templateUrl: 'complain-detail.html',
})
export class ComplainDetailPage {
  com
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.com = this.navParams.get('com');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplainDetailPage');
  }
  

}
