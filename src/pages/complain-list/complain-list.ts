import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from "../../services/http.service";
import { ComplainDetailPage } from "../complain-detail/complain-detail";
import { ComplainWritePage } from '../complain-write/complain-write';

@IonicPage()
@Component({
  selector: 'page-complain-list',
  templateUrl: 'complain-list.html',
})
export class ComplainListPage {
  complains
  offset: number = 0;
  pageSize: number = 15;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpService) {
  }

  ionViewDidLoad() {
    this.load();
  }
  load() {
    this.http.get('/complain?offset=' + this.offset * this.pageSize + '&pageSize=' + this.pageSize)
    .subscribe(data =>{
        this.complains = data.json().data;
    })
  }
  detail(com){
    this.navCtrl.push(ComplainDetailPage,{com:com})
  }
  doInfinite(infiniteScroll) {
    this.offset++;
    
    this.http.get('/complain?offset=' + this.offset * this.pageSize + '&pageSize=' + this.pageSize)
    .subscribe(data =>{
      this.complains = this.complains.concat(data.json().data);
      console.log(this.complains);
      infiniteScroll.complete();
    });
  }

  goWrite() {
    this.navCtrl.push(ComplainWritePage);
  }
}
