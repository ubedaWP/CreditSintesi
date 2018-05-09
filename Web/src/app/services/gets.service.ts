import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetsService {

  constructor(public dataService: DataService, private httpClient: HttpClient) { }

  getUsersRaw(){
    return this.httpClient.get(this.dataService.baseIP + "usersRaw");
  }

  getLogin(user: string, password: string){
    return this.httpClient.get(this.dataService.baseIP + "user/user=" + user + "&password=" + password);
  }

  getAuthLogin(user: string){
    return this.httpClient.get(this.dataService.baseIP + "user=" + user);
  }

  getLastDigitalProducts(){
    return this.httpClient.get(this.dataService.baseIP + "lastDigitalProducts");
  }

  getLastFisicalProducts(){
    return this.httpClient.get(this.dataService.baseIP + "lastFisicalProducts");
  }

  getDigitalProducts(){
    return this.httpClient.get(this.dataService.baseIP + "digitalProducts");
  }

  getFisicalProducts(){
    return this.httpClient.get(this.dataService.baseIP + "fisicalProducts");
  }

  getTags(){
    return this.httpClient.get(this.dataService.baseIP + "tags");
  }

  getSearchFilterFisics(words){
    return this.httpClient.get(this.dataService.baseIP + "searchFisics=%" + words + "%");
  }

  getSearchFilterDigitals(words){
    return this.httpClient.get(this.dataService.baseIP + "searchDigitals=%" + words + "%");
  }

  getIdTag(tag){
    return this.httpClient.get(this.dataService.baseIP + "tag=" + tag);
  }

  getFilterProductsDigital_Tags(tag){
    return this.httpClient.get(this.dataService.baseIP + "digitalTag=" + tag);
  }

  getFilterProductsFisical_Tags(tag){
    return this.httpClient.get(this.dataService.baseIP + "fisicalTag=" + tag);
  }

}
