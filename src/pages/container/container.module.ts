import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContainerPage } from './container';
import { ShopPageModule } from '../shop/shop.module';
import { ShopDetailPageModule } from '../shop-detail/shop-detail.module';

@NgModule({
  declarations: [
    ContainerPage,
  ],
  imports: [
    IonicPageModule.forChild(ContainerPage),
    ShopPageModule,
    ShopDetailPageModule
  ],
})
export class ContainerPageModule {}
