import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Facebook } from '@ionic-native/facebook/ngx';
import firebase from 'firebase/app'

var firebaseConfig = {
  apiKey: "AIzaSyDoJnV9PuZZoJ97peHKgePEMHorbqJdcXQ",
  authDomain: "wasty-a344d.firebaseapp.com",
  databaseURL: "https://wasty-a344d.firebaseio.com",
  projectId: "wasty-a344d",
  storageBucket: "wasty-a344d.appspot.com",
  messagingSenderId: "459659208193",
  appId: "1:459659208193:web:2593471d14c96022c84200",
  measurementId: "G-SZ1TJYMVNT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
