import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InsertsService {

  constructor(public dataService: DataService, private httpClient: HttpClient) { }


  insertUser(data){
    const url = this.dataService.baseIP + "registreProva/user=" + data[0].value + "&password=" 
    + data[1].value + "&email=" + data[2].value + "&nom=" + data[3].value + "&dataNaixament=" 
    + data[4] + "&provincia=" + data[5].value + "&nif=" + data[6].value + "&avatar=" 
    + data[7] + "&admin=" + data[8]
    console.log(url);
    return this.httpClient.get(url).subscribe();
  }
}
