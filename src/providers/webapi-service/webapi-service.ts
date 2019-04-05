import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { GlobalvarProvider } from "../globalvar/globalvar";

@Injectable()
export class WebapiServiceProvider {

  //กำหนด properties สำหรับไว้เก็บ url
  baseURLAPI:any;

  constructor(public http: Http,public global:GlobalvarProvider) {
    //this.baseURLAPI = "http://192.168.1.50/combindappapi/";
    //this.baseURLAPI = this.global.baseURLAPI
  }

  //สร้าง Method สำหรับ Post 

  postData(objdata,segment){
    return new Promise((resolve,reject) => {
      let headers = new Headers();
      headers.append('content-Type','applation/json;charset=UTF-8');

      this.http.post(this.global.baseURLAPI+segment,JSON.stringify(objdata),{headers:headers})
      .subscribe(res => {
        resolve(res.json());
      },(err)=>{
        reject(err);
      });
    });
  }

   //สร้าง Method สำหรับ GET 
   getData(segment){
    return new Promise((resolve,reject) => {
      let headers = new Headers();
      headers.append('content-Type','applation/json;charset=UTF-8');

      this.http.get(this.global.baseURLAPI+segment,{headers:headers})
      .subscribe(res => {
        resolve(res.json());
      },(err)=>{
        reject(err);
      });
    });
  }
 
      

}
      