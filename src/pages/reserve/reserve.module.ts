import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservePage } from './reserve';
import { BbqPageModule } from "../bbq/bbq.module";

@NgModule({
  declarations: [
    ReservePage,
  ],
  imports: [
    IonicPageModule.forChild(ReservePage),
    BbqPageModule
  ],
})
export class ReservePageModule {}
