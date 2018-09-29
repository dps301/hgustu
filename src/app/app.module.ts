import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpService } from "../services/http.service";
import { HttpModule } from "@angular/http";
import { ServerAddr } from "../services/server.addr";

import { MyApp } from "./app.component";
import { ContainerPageModule } from "../pages/container/container.module";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LoginPageModule } from "../pages/login/login.module";
import { LoginSession } from "../services/loginSession";
import { NativeStorage } from "@ionic-native/native-storage";
import { MjPageModule } from "../pages/mj/mj.module";

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      swipeBackEnabled: "true"
    }),
    ContainerPageModule,
    HttpModule,
    LoginPageModule,
    MjPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    ServerAddr,
    InAppBrowser,
    LoginSession,
    NativeStorage,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
