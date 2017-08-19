import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {
  @ViewChild(Slides) slides: Slides;
  sampleImg: Array<any> = ["assets/images/samples/1.png", "assets/images/samples/2.png" ,"assets/images/samples/3.png","assets/images/samples/4.png"];
  shopNo: any;
  datas: any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  ionViewDidLoad() {
    this.shopNo = this.navParams.get('shopNo');
    this.http.get('/shop/detail?shopNo='+this.shopNo)
    .subscribe(data =>{
        this.datas = data.json();
        console.log(this.datas)
    })
    
  }

}
