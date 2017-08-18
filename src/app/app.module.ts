import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpService } from '../services/http.service';
import { HttpModule } from "@angular/http";
import { ServerAddr } from '../services/server.addr';


import { MyApp } from './app.component';
import { ContainerPageModule } from '../pages/container/container.module';
import { ShopPageModule } from '../pages/shop/shop.module';
import { ShopDetailPageModule } from '../pages/shop-detail/shop-detail.module';
@NgModule({
  declarations: [
    MyApp,
    // ShopPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ContainerPageModule,
    ShopPageModule,
    ShopDetailPageModule,
    HttpModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    ServerAddr,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
