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

  getFisicalProductByID(id){
    return this.httpClient.get(this.dataService.baseIP + "fisicId=" + id);
  }

  getDigitalProductByID(id){
    return this.httpClient.get(this.dataService.baseIP + "digitalId=" + id);
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

  getFisicals1Tag(tag){
    return this.httpClient.get(this.dataService.baseIP + "fisicalTag=" + tag);
  }

  getDigitals1Tag(tag){
    return this.httpClient.get(this.dataService.baseIP + "digitalTag=" + tag);
  }

  getFisicals2Tags(tag1, tag2){
    return this.httpClient.get(this.dataService.baseIP + "fisicalTags=" + tag1 + "/" + tag2);
  }

  getDigitals2Tags(tag1, tag2){
    return this.httpClient.get(this.dataService.baseIP + "digitalTags=" + tag1 + "/" + tag2);
  }

  getNoticies(category){
    return this.httpClient.get(this.dataService.baseIP + "newsCategory=" + category);
  }
}
