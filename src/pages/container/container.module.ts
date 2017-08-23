import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContainerPage } from './container';
import { ShopPageModule } from '../shop/shop.module';
import { ShopDetailPageModule } from '../shop-detail/shop-detail.module';
import { CouponListPageModule } from '../coupon-list/coupon-list.module';
import { CalendarPageModule } from '../calendar/calendar.module';
import { SquareModule } from '../../directive/sqare.module'
import { ReservePageModule } from "../reserve/reserve.module";
import { NoticePageModule } from "../notice/notice.module";
import { NoticeDetailPageModule } from "../notice-detail/notice-detail.module";
import { ComplainPageModule } from "../complain/complain.module";
import { FormPageModule } from "../form/form.module";

@NgModule({
  declarations: [
    ContainerPage,
  ],
  imports: [
    IonicPageModule.forChild(ContainerPage),
    ShopPageModule,
    ShopDetailPageModule,
    CouponListPageModule,
    CalendarPageModule,
    SquareModule,
    ReservePageModule,
    NoticePageModule,
    NoticeDetailPageModule,
    ComplainPageModule,
    FormPageModule
    ],
})
export class ContainerPageModule {}
