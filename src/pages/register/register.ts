import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //กำหนด properties ไว้รับค่าจากฟอร์ม

  userData ={
    "fullname":'',
    "email":'',
    "username":'',
    "password":''
  }

  //กำหนด properties ไว้รับค่าจาก api
  reponseData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

//submit to web api
  registersubmit(){
    this.webapi.postData(this.userData,"register.php").then((result) =>{
      //console.log(result);
      this.reponseData=result;
      if(this.reponseData.Message.text =="Register Success"){
        let alert = this.alertCtrl.create({
          title:"สถานะการลงทะเบียน",
          subTitle:"ลงทะเบียนเรียบร้อยแล้ว",
          buttons:['Close']

        });
        alert.present();
        //ส่งกลับไปหน้าหลัก
        this.navCtrl.pop();

      }else{

      }
    });


  }

}
