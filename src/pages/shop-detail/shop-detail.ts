import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { Slides } from 'ionic-angular';

declare var naver: any;

@Component({
  selector: 'page-shop-detail',
  templateUrl: 'shop-detail.html',
})
export class ShopDetailPage {
  @ViewChild(Slides) slides: Slides;

  sampleImg: Array<any> = ["assets/images/samples/1.png", "assets/images/samples/2.png" ,"assets/images/samples/3.png","assets/images/samples/4.png"];
  shopNo: any;
  datas: any = [];
  map: any;
  mapOptions = {
    center: new naver.maps.LatLng(36.0190335, 129.3433895),
    zoom: 10
  };
  marker: any;
  infoWindow: any;
  showComplain: boolean = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  ionViewDidLoad() {
    this.map = new naver.maps.Map('map', this.mapOptions);

    this.shopNo = this.navParams.get('shopNo');
    this.http.get('/shop/detail?shopNo='+this.shopNo)
    .subscribe(data =>{
        this.datas = data.json();
        console.log(this.datas)
    });

    this.setMarker(36.0190335, 129.3433895);
  }

  setMarker(lat, lng) {
    this.marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: this.map,
    });
      
    this.infoWindow = new naver.maps.InfoWindow({
      content: [
        '<div style="padding: 7px 10px; max-width: 300px;">',
        '   <div style="font-size: 18px; font-weight: 600; margin: 3px 0px;">' + '바비레드' + ' </div>',
        '   <div style="font-size: 15px; margin: 3px 0px;">'+'tel: ' + '054-1234-1234' + '</div>',
        '</div>'].join(''),
      borderWidth: 1,
      borderColor: "#A3BDD7",
    });

    naver.maps.Event.addListener(this.marker, 'click', this.getClickHandler());
  }

  getClickHandler() {
    return (e) => {
      if (this.infoWindow.getMap()) {
        this.infoWindow.close();
      } 
      else {
        this.infoWindow.open(this.map, this.marker);
      }
    }
  }
}
