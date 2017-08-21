import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContainerPage } from './container';
import { ShopPageModule } from '../shop/shop.module';
import { ShopDetailPageModule } from '../shop-detail/shop-detail.module';
import { CouponListPageModule } from '../coupon-list/coupon-list.module';
import { CalendarPageModule } from '../calendar/calendar.module';
import { LoginPageModule } from '../login/login.module';
import { SquareModule } from '../../directive/sqare.module'
import { ReservePageModule } from "../reserve/reserve.module";
@NgModule({
  declarations: [
    ContainerPage,
  ],
  imports: [
    IonicPageModule.forChild(ContainerPage),
    ShopPageModule,
    ShopDetailPageModule,
    CouponListPageModule,
    LoginPageModule,
    CalendarPageModule,
    SquareModule,
    ReservePageModule
    ],
})
export class ContainerPageModule {}
