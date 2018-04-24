import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';

@Injectable()
export class PublicService {

  constructor( private dataService: DataService ) { 
    
  }

  public user: string;
  public isAdmin: boolean;
  public isOn: boolean = false;

  getIsOn(){
    return this.isOn;
  }

  getIsAdmin(){
    return this.isAdmin;
  }

  getUserName(){
    return this.user;
  }

}
