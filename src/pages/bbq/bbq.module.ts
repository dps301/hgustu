import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BbqPage } from './bbq';

@NgModule({
  declarations: [
    BbqPage,
  ],
  imports: [
    IonicPageModule.forChild(BbqPage),
  ],
})
export class BbqPageModule {}
