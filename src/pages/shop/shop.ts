import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { ShopDetailPage } from '../shop-detail/shop-detail'
/**
 * Generated class for the ShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  datas:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  ionViewDidLoad() {
      this.http.get('/shop')
      .subscribe(data =>{
          this.datas = data.json();
      })
  }
  detail(shopNo) {
    this.navCtrl.push(ShopDetailPage, {shopNo: shopNo});
  }

}
