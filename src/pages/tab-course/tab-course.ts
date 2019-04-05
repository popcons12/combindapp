import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { GlobalvarProvider } from "../../providers/globalvar/globalvar";
import { CoursedetailPage } from '../coursedetail/coursedetail';

/**
 * Generated class for the TabCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-course',
  templateUrl: 'tab-course.html',
})
export class TabCoursePage {
  courseData:any;
//properties เก็บ path รูป
imgPath:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public global:GlobalvarProvider) {
      this.imgPath = global.baseURLImage;
    }
    
  feedCourse(){
    this.webapi.getData("feed_course.php").then((result)=>{
      this.courseData = result;
    });

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TabCoursePage');
    this.feedCourse();
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.feedCourse();
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  //เรียกดูหน้ารายละเอียด course
  showCourseDetail(cid){
   // alert(cid);
   this.navCtrl.push(CoursedetailPage,{"cid":cid});
  }

}
