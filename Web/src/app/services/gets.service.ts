import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetsService {

  constructor(public dataService: DataService, private httpClient: HttpClient) { }

  getUsersRaw(){
    return this.httpClient.get(this.dataService.baseIP + "/usersRaw")
  }

  getLogin(user: string, password: string){
    return this.httpClient.get(this.dataService.baseIP + "/user/user=" + user + "&password=" + password);
  }

}
