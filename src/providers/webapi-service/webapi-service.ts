import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebapiServiceProvider {

  //กำหนด properties สำหรับไว้เก็บ url
  baseURLAPI:any;

  constructor(public http: Http) {
    this.baseURLAPI = "http://192.168.1.50/combindappapi/";
  }

  //สร้าง Method สำหรับ Post 

  postData(objdata,segment){
    return new Promise((resolve,reject) => {
      let headers = new Headers();
      headers.append('content-Type','applation/json;charset=UTF-8');

      this.http.post(this.baseURLAPI+segment,JSON.stringify(objdata),{headers:headers})
      .subscribe(res => {
        resolve(res.json());
      },(err)=>{
        reject(err);
      });
    });
  }
      

}
      