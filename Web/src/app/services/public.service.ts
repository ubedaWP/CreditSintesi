import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class PublicService{

  constructor( private dataService: DataService, private _cookieService:CookieService) { 
    this._cookieService.put('isAdmin', 'false');
    this._cookieService.put('isOn', 'false');
    this._cookieService.put('user', '');
  }

  setIsOn(isOn: string){
    this._cookieService.put('isOn',isOn) ;
  }

  getIsOn(){
    return this._cookieService.get('isOn');
  }

  setIsAdmin(isAdmin: string){
    this._cookieService.put('isAdmin', isAdmin);
  }

  getIsAdmin(){
    return this._cookieService.get('isAdmin');
  }

  setUserName(user: string){
    this._cookieService.put('user', user);
  }

  getUserName(){
    return this._cookieService.get('user');
  }

}
