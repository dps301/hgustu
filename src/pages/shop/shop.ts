import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { ShopDetailPage } from '../shop-detail/shop-detail'

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  datas: any = [];

  type: Array<any> = [];
  loca: Array<any> = [];

  type_choice: any = -1;
  loca_choice: any = -1;

  show_loca: boolean = false;
  show_type: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  ionViewDidLoad() {
    this.refresh()
    this.http.get('/shop/type')
    .subscribe(data =>{
        this.type = data.json();
    });
    this.http.get('/shop/loca')
    .subscribe(data =>{
        this.loca = data.json();
    });
  }

  refresh() {
    console.log("re");
    let url = '/shop?a=1';

    if(this.loca.length > 0 && this.loca_choice != -1) {
      url +=('&loca='+ this.loca[this.loca_choice].no);
    }
    
    if(this.type.length > 0 && this.type_choice != -1) {
      url +=('&type=' + this.type[this.type_choice].no);
    }

    console.log(url);
    this.http.get(url)
    .subscribe(data =>{
        this.datas = data.json();
    })
  }

  detail(shopNo) {
    this.navCtrl.push(ShopDetailPage, {shopNo: shopNo});
  }
}
