import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarProvider {

  //Development API
  baseURLAPI:string ="http://192.168.1.50/combindappapi/"
  baseURLImage:string ="http://192.168.1.50/combindappapi/images/"

  // Production
 // baseURLAPI:string ="http://192.168.1.50/combindappapi/"
 //baseURLImage:string ="http://192.168.1.50/combindappapi/images/"
  constructor() {
   
  }

}
