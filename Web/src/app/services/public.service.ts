import { Injectable, OnInit } from '@angular/core';
import { DataService } from './data-service.service';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class PublicService implements OnInit{

  constructor( private dataService: DataService, private _cookieService:CookieService) { 
    
  }

  ngOnInit(){
    this._cookieService.put('isAdmin', 'false');
    this._cookieService.put('isOn', 'false');
    this._cookieService.put('user', '');
    this._cookieService.put('avatar', '');
  }

  public setIsOn(isOn: string){
    this._cookieService.put('isOn',isOn) ;
  }

  public getIsOn(){
    return this._cookieService.get('isOn');
  }

  public setIsAdmin(isAdmin: string){
    this._cookieService.put('isAdmin', isAdmin);
  }

  public getIsAdmin(){
    return this._cookieService.get('isAdmin');
  }

  public setUserName(user: string){
    this._cookieService.put('user', user);
  }

  public getUserName(){
    return this._cookieService.get('user');
  }

  public setAvatar(avatar){
    this._cookieService.put('avatar', avatar);
  }

  public getAvatar(){
    return this._cookieService.get('avatar');
  }

  public logout(){
    this._cookieService.put('user', '');
    this._cookieService.put('isAdmin', 'false');
    this._cookieService.put('isOn', 'false');
    this._cookieService.put('avatar', '');
  }

}
