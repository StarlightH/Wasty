import { Component } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import firebase from 'firebase/app'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fb: Facebook) {}
  login(){
    this.fb.login(['email']).then((res:FacebookLoginResponse)=>{
      let crediential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
      firebase.auth().signInWithCredential(crediential).then(info=>{
        alert(JSON.stringify(info))
      })
    })
  }
  

}
