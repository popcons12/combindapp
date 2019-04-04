import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  //กำหนด properties ไว้เก็บข้อมูล จาก localstorage
  usernameLogin:string;
  checkLoginStatus:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(localStorage.getItem("loginstatus") !=null){
      this.usernameLogin=localStorage.getItem("loginstatus");
      this.checkLoginStatus=false;
    }else{
      this.usernameLogin="";
      this.checkLoginStatus=true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  login(){

    this.navCtrl.push(LoginPage);
  }

  register(){

    this.navCtrl.push(RegisterPage);
  }

}
