import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Procura arquivos .ts, por isso no precisa colocar a extensão ".../about/about.ts"
// o ".." antes do "/" significa que está voltando uma pasta no diretório. Ex: Se estou na pasta app e dou um ../, então estarei na pasta src.
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedPageModule } from '../pages/feed/feed.module'; //Pagina importada
import { IntroPageModule } from '../pages/intro/intro.module'; //Pagina importada

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],

  // Para adicionar alguma página ao projeto, é necessário colocar ela dentro do "imports:[]""
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule, //Pagina adicionada
    IntroPageModule //Pagina adicionada
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
