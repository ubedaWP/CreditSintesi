import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UploadService {

  constructor(private dataService: DataService, private httpClient: HttpClient) { }


  uploadNoticia(text1, text2, categoria, titol, resum, imatgeP, imatgeM){
    const url = this.dataService.baseIP + "addNew/" + text1 + "/" + text2 + "/" + categoria + "/" + titol + "/" +
    resum + "/" + imatgeP + "/" + imatgeM
    return this.httpClient.get(url).subscribe();
  }

  uploadProductFisic(nom, descripcio, descripcioExtensa, imatge, imatgeGallery, price){
    const url = this.dataService.baseIP + "addProducteFisic/" + nom + "/" + descripcio + "/" + descripcioExtensa + 
    "/" + imatge + "/" + imatgeGallery + "/" + price
    return this.httpClient.get(url).subscribe();
  }

  uploadProductDigital(nom, descripcio, descripcioExtensa, imatge, imatgeGallery, price){
    const url = this.dataService.baseIP + "addProducteDigital/" + nom + "/" + descripcio + "/" + descripcioExtensa + 
    "/" + imatge + "/" + imatgeGallery + "/" + price
    return this.httpClient.get(url).subscribe();
  }
}
