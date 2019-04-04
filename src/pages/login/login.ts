import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,MenuController  } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    //กำหนด properties ไว้รับค่าจากฟอร์ม
    userData ={
      "username":'',
      "password":''
    }
  
    //กำหนด properties ไว้รับค่าจาก api
    reponseData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public alertCtrl:AlertController,
    private menu: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.menu.swipeEnable(false);
  }

  //submit to web api
  loginsubmit(){
    this.webapi.postData(this.userData,"login.php").then((result) =>{
      //console.log(result);
      this.reponseData=result;
      if(this.reponseData.Message.text =="Login Success"){
        let alert = this.alertCtrl.create({
          title:"สถานะการเข้าใช้งาน",
          subTitle:"เข้าระบบเรียบร้อย",
          buttons:['Close']

        });
        alert.present();

        //สร้างตัวแปรประเภท local storage
        localStorage.setItem("loginstatus",this.userData.username);

        //ส่งกลับไปหน้าหลัก
        this.navCtrl.setRoot(TabsPage);

      }else{
        let alert = this.alertCtrl.create({
          title:"สถานะการเข้าใช้งาน",
          subTitle:"มีข้อผิดพลาดไม่สามารถเข้าใช้งานได้",
          buttons:['Close']

        });

        alert.present();
      }
    });


  }

}
