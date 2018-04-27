import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InsertsService {

  constructor(public dataService: DataService, private httpClient: HttpClient) { }


  insertUser(data){
    return this.httpClient.get(this.dataService.baseIP + "registreProva/data=" + data);
  }
}
