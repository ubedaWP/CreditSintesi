/**
 * @author David Ubeda
 */
import { Injectable, OnInit } from '@angular/core';
import { DataService } from './data-service.service';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class PublicService implements OnInit{

  /**
   * @property
   */
  public cart = [];

  /**
   * 
   * @param dataService 
   * @param _cookieService 
   */
  constructor( private dataService: DataService, private _cookieService:CookieService) { 
    
  }

  /**
   * Funció que inicialitza el que hi ha dins d'ella cuan s'obre el component/pàgina
   */
  ngOnInit(){
    this._cookieService.put('idUser', '');
    this._cookieService.put('isAdmin', 'false');
    this._cookieService.put('isOn', 'false');
    this._cookieService.put('user', '');
    this._cookieService.put('avatar', '');
    this._cookieService.put('cart', 'false');
  }

  /**
   * Funció que posa valor a la cookie seleccionada
   * @param isOn 
   */
  public setIsOn(isOn: string): any{
    this._cookieService.put('isOn',isOn) ;
  }

  /**
   * Funció que retorna el valor de la cookie seleccionada
   */
  public getIsOn(): string{
    return this._cookieService.get('isOn');
  }

  /**
   * Funció que posa valor a la cookie seleccionada
   * @param idUser 
   */
  public setIdUser(idUser: string): any{
    this._cookieService.put('idUser', idUser);
  }

  /**
   * Funció que retorna el valor de la cookie seleccionada
   */
  public getIdUser(): string{
    return this._cookieService.get('idUser');
  }

  /**
   * Funció que posa valor a la cookie seleccionada
   * @param isAdmin 
   */
  public setIsAdmin(isAdmin: string){
    this._cookieService.put('isAdmin', isAdmin);
  }

  /**
   * Funció que retorna el valor de la cookie seleccionada
   */
  public getIsAdmin(): string{
    return this._cookieService.get('isAdmin');
  }

  /**
   * Funció que posa valor a la cookie seleccionada
   * @param user 
   */
  public setUserName(user: string){
    this._cookieService.put('user', user);
  }

  /**
   * Funció que retorna el valor de la cookie seleccionada
   */
  public getUserName(): string{
    return this._cookieService.get('user');
  }

  /**
   * Funció que posa valor a la cookie seleccionada
   * @param avatar 
   */
  public setAvatar(avatar){
    this._cookieService.put('avatar', avatar);
  }

  /**
   * Funció que retorna el valor de la cookie seleccionada
   */
  public getAvatar(): string{
    return this._cookieService.get('avatar');
  }

  /**
   * Funció que posa valor a la cookie seleccionada
   * @param cart 
   */
  public setCartIsOn(cart){
    this._cookieService.put('cart', cart);
  }

  /**
   * Funció que retorna el valor de la cookie seleccionada
   */
  public getCartIsOn(): string{
    return this._cookieService.get('cart');
  }

  /**
   * Funció que elimina el valor de totes les cookies existents quan es deslogueja un usuari de la pàgina
   */
  public logout(){
    this._cookieService.put('idUser', '');
    this._cookieService.put('user', '');
    this._cookieService.put('isAdmin', 'false');
    this._cookieService.put('isOn', 'false');
    this._cookieService.put('avatar', '');
    this._cookieService.put('cart', 'false');
  }

}
