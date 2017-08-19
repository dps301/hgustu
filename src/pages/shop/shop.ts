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

  type:any=[];
  loca:any=[];

  type_choice:any=0;
  loca_choice:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  ionViewDidLoad() {
    this.refresh()
    this.http.get('/shop/type')
      .subscribe(data =>{
          this.type = data.json();
      })
    this.http.get('/shop/loca')
      .subscribe(data =>{
          this.loca = data.json();
      })
  }
  refresh() {
    console.log("re")
    let url = '/shop?a=1'
    if(this.type_choice){
      url +=('&type='+this.type_choice)
    }
    if(this.loca_choice){
      url +=('&loca='+this.loca_choice)
    }
    console.log(url)
    this.http.get(url)
    .subscribe(data =>{
        this.datas = data.json();
    })
  }
  detail(shopNo) {
    this.navCtrl.push(ShopDetailPage, {shopNo: shopNo});
  }
  

}
