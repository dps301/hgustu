import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopDetailPage } from './shop-detail';
import { ShopComplainPageModule } from '../shop-complain/shop-complain.module';

@NgModule({
  declarations: [
    ShopDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopDetailPage),
    ShopComplainPageModule
  ],
})
export class ShopDetailPageModule {}
