import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalvarProvider } from '../../providers/globalvar/globalvar';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-coursedetail',
  templateUrl: 'coursedetail.html',
})
export class CoursedetailPage {

  courseDetailData={
"cname":'',
"cdatil":'',
"cimages":'',
"cprice":'',
"cdate":''

  };


  getCID:any;
  imgPath:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public global:GlobalvarProvider) {
      this.getCID = this.navParams.get('cid');
      this.imgPath = global.baseURLImage;
    }

  ionViewDidLoad() {
    this.webapi.getData("feed_course_detail.php?cid="+this.getCID).then((result =>{
this.courseDetailData.cname = result[0].name;
this.courseDetailData.cdatil = result[0].description;
this.courseDetailData.cimages = result[0].images;
this.courseDetailData.cprice = result[0].price;
this.courseDetailData.cdate = result[0].create_at;

    })
    )
  }

}
