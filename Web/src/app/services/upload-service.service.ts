import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UploadService {

  constructor(private dataService: DataService, private httpClient: HttpClient) { }


  uploadNoticia(text1, text2, categoria, titol, resum, imatgeP, imatgeM){
    return this.httpClient.get(
      this.dataService.baseIP + "addNew/" + text1 + "/" + text2 + "/" + categoria + "/" + titol + "/" +
      resum + "/" + imatgeP + "/" + imatgeM
    ).subscribe();
  }

  uploadProduct(){
    return this.httpClient.get(
      this.dataService.baseIP + "addProduct"
    ).subscribe();
  }
}
