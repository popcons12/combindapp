import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { Camera, CameraOptions } from '@ionic-native/camera';


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

  //ตัวแปรเก็บที่อยู่ของรูป
  base64Image:string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {
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


  //ฟังก์ชั่นเรียกกล้องถ่ายรูป
  takecamera(){
    //alert("OK");
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // Do something with the new photo
      this.base64Image = 'data:image/jpeg;base64,'+ imageData;

    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });
  }

  choose(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // Do something with the new photo
      this.base64Image = 'data:image/jpeg;base64,'+ imageData;

    }, (err) => {
     // Handle error
    });


  }


  }

