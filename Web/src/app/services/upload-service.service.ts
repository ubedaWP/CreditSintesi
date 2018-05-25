/**
 * @author David Ubeda
 */
import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UploadService {

  /**
   * 
   * @param dataService 
   * @param httpClient 
   */
  constructor(private dataService: DataService, private httpClient: HttpClient) { }


  /**
   * Funció que puja una noticia nova a la BD
   * @param text1 
   * @param text2 
   * @param categoria 
   * @param titol 
   * @param resum 
   * @param imatgeP 
   * @param imatgeM 
   */
  uploadNoticia(text1: string, text2: string, categoria: string, titol: string, resum: string,
    imatgeP: string, imatgeM: string): any{
    const url = this.dataService.baseIP + "addNew/" + text1 + "/" + text2 + "/" + categoria + "/" + titol + "/" +
    resum + "/" + imatgeP + "/" + imatgeM
    return this.httpClient.get(url).subscribe();
  }

  /**
   * Funció que puja un producte físic nou a la BD
   * @param nom 
   * @param descripcio 
   * @param descripcioExtensa 
   * @param imatge 
   * @param imatgeGallery 
   * @param price 
   */
  uploadProductFisic(nom: string, descripcio: string, descripcioExtensa: string, imatge: string,
    imatgeGallery: string, price: string): any{
    const url = this.dataService.baseIP + "addProducteFisic/" + nom + "/" + descripcio + "/" + descripcioExtensa + 
    "/" + imatge + "/" + imatgeGallery + "/" + price
    return this.httpClient.get(url).subscribe();
  }

  /**
   * Funció que afegeix un nou producte digital a la BD
   * @param nom 
   * @param descripcio 
   * @param descripcioExtensa 
   * @param imatge 
   * @param imatgeGallery 
   * @param price 
   */
  uploadProductDigital(nom: string, descripcio: string, descripcioExtensa: string, imatge: string,
    imatgeGallery: string, price: string): any{
    const url = this.dataService.baseIP + "addProducteDigital/" + nom + "/" + descripcio + "/" + descripcioExtensa + 
    "/" + imatge + "/" + imatgeGallery + "/" + price
    return this.httpClient.get(url).subscribe();
  }
}
