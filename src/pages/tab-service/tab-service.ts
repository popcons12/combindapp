import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

/**
 * Generated class for the TabServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-service',
  templateUrl: 'tab-service.html',
})
export class TabServicePage {

  services:string="General";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public webapi: WebapiServiceProvider) {
  }



  ionViewDidLoad() {
    //console.log('ionViewDidLoad TabServicePage');
   // this.feedCourse();
  }

  doRefresh(refresher) {
    setTimeout(() => {
      switch(this.services){
        case'General':
        alert('คุณ Reload Tab Genaral');
        break;
        case'Education':
        alert('คุณ Reload Tab Education');
        break;
        case('Spacial'):
        alert('คุณ Reload Tab spacial');
        break;
      }

      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  

}
