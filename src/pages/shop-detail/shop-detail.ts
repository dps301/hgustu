import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/http.service';
import { Slides } from 'ionic-angular';
import { LoginSession } from "../../services/loginSession";

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
  mapOptions:any;
  marker: any;
  infoWindow: any;
  showComplain: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService,
  private loginSession : LoginSession) {
  }

  ionViewDidLoad() {
    this.shopNo = this.navParams.get('shopNo');
    this.http.get('/shop/detail?shopNo='+this.shopNo)
    .subscribe(data =>{
        this.datas = data.json();
        console.log(this.datas)
        this.mapOptions = {
          center: new naver.maps.LatLng(this.datas.x,this.datas.y),
          zoom: 10
        };
        this.map = new naver.maps.Map('map', this.mapOptions);
        this.setMarker(this.datas.x, this.datas.y,this.datas.name,this.datas.call);
    });

    
  }

  setMarker(lat, lng,name, call) {
    this.marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: this.map,
    });
      
    this.infoWindow = new naver.maps.InfoWindow({
      content: [
        '<div style="padding: 7px 10px; max-width: 300px;">',
        '   <div style="font-size: 18px; font-weight: 600; margin: 3px 0px;">' + name + ' </div>',
        '   <div style="font-size: 15px; margin: 3px 0px;">'+'tel: ' + call + '</div>',
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
  private textareaValue = '';
  doTextareaValueChange(ev) {
    try {
      this.textareaValue = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }
  complain(){
    this.http.post('/problem',{userNo:this.loginSession.getInfo().userNo,shopNo:this.shopNo,content:this.textareaValue})
    .subscribe(d=>{
      
    })
  }
}
