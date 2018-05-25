/**
 * @author David Ubeda
 */
import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetsService {

  constructor(public dataService: DataService, private httpClient: HttpClient) { }

  /**
   * @public
   * Funció que crida al WebService per agafar tots els usuaris de la BD
   */
  getUsersRaw(): any{
    return this.httpClient.get(this.dataService.baseIP + "usersRaw");
  }

  /**
   * @public
   * @param id
   * Funció que crida al WebService per agafar un usuari de la BD
   */
  getUserById(id: string): any{
    return this.httpClient.get(this.dataService.baseIP + "userID=" + id);
  }

  /**
   * @public
   * @param user
   * @param password
   * Funció que crida al WebService per poder fer el Login
   */
  getLogin(user: string, password: string): any{
    return this.httpClient.get(this.dataService.baseIP + "user/user=" + user + "&password=" + password);
  }

  /**
   * @public
   * @param user
   * Funció que crida al WebService per autenticar l'usuari
   */
  getAuthLogin(user: string): any{
    return this.httpClient.get(this.dataService.baseIP + "user=" + user);
  }

  /**
   * @public
   * @param id
   * Funció que crida al WebService per agafar un producte físic per id
   */
  getFisicalProductByID(id: string): any{
    return this.httpClient.get(this.dataService.baseIP + "fisicId=" + id);
  }

  /**
   * @public
   * @param id
   * Funció que crida al WebService per agafar un producte digital per id
   */
  getDigitalProductByID(id: string): any{
    return this.httpClient.get(this.dataService.baseIP + "digitalId=" + id);
  }

  /**
   * @public
   * Funció que crida al WebService per agafar tots els productes digitals ordenats per la Data
   */
  getLastDigitalProducts(): any{
    return this.httpClient.get(this.dataService.baseIP + "lastDigitalProducts");
  }

  /**
   * @public
   * Funció que crida al WebService per agafar tots els productes fisics ordenats per la Data
   */
  getLastFisicalProducts(): any{
    return this.httpClient.get(this.dataService.baseIP + "lastFisicalProducts");
  }

  /**
   * @public
   * Funció que crida al WebService per agafar tots els productes digitals
   */
  getDigitalProducts(): any{
    return this.httpClient.get(this.dataService.baseIP + "digitalProducts");
  }

  /**
   * @public
   * Funció que crida al WebService per agafar tots els productes físics
   */
  getFisicalProducts(): any{
    return this.httpClient.get(this.dataService.baseIP + "fisicalProducts");
  }

  /**
   * @public
   * Funció que crida al WebService per agafar tots els tags(Categories de Producte)
   */
  getTags(): any{
    return this.httpClient.get(this.dataService.baseIP + "tags");
  }

  /**
   * @public
   * @param words
   * Funció que crida al WebService per filtrar productes fisics per el que s'escriu
   */
  getSearchFilterFisics(words: string): any{
    return this.httpClient.get(this.dataService.baseIP + "searchFisics=%" + words + "%");
  }

  /**
   * @public
   * @param words
   * Funció que crida al WebService per filtrar productes digitals per el que s'escriu
   */
  getSearchFilterDigitals(words: string): any{
    return this.httpClient.get(this.dataService.baseIP + "searchDigitals=%" + words + "%");
  }

  /**
   * @public
   * @param tag
   * Funció que crida al WebService per agafar el Tag segons el nom del Tag
   */
  getIdTag(tag: string): any{
    return this.httpClient.get(this.dataService.baseIP + "tag=" + tag);
  }

  /**
   * @public
   * @param tag
   * Funció que crida al WebService per agafar els productes físics segons el nom del tag
   */
  getFisicals1Tag(tag: string): any{
    return this.httpClient.get(this.dataService.baseIP + "fisicalTag=" + tag);
  }

  /**
   * @public
   * @param tag
   * Funció que crida al WebService per agafar els productes digitals segons el nom del tag
   */
  getDigitals1Tag(tag: string): any{
    return this.httpClient.get(this.dataService.baseIP + "digitalTag=" + tag);
  }

  /**
   * @public
   * @param tag1
   * @param tag2
   * Funció que crida al WebService per agafar els productes físics segons el nom de 2 tags
   */
  getFisicals2Tags(tag1: string, tag2: string): any{
    return this.httpClient.get(this.dataService.baseIP + "fisicalTags=" + tag1 + "/" + tag2);
  }

  /**
   * @public
   * @param tag1
   * @param tag2
   * Funció que crida al WebService per agafar els productes dgitals segons el nom de 2 tags
   */
  getDigitals2Tags(tag1: string, tag2: string): any{
    return this.httpClient.get(this.dataService.baseIP + "digitalTags=" + tag1 + "/" + tag2);
  }

  /**
   * @public
   * @param category
   * Funció que crida al WebService per agafar les noticies segons la categoria
   */
  getNoticies(category: string): any{
    return this.httpClient.get(this.dataService.baseIP + "newsCategory=" + category);
  }

  /**
   * @public
   * @param id
   * Funció que crida al WebService per agafar noticies segons la id
   */
  getNoticiaId(id: string): any{
    return this.httpClient.get(this.dataService.baseIP + "news/Id=" + id);
  }
<<<<<<< HEAD

  getLatestNews(){
=======
  getLatestNews(){
    //console.log(url);
>>>>>>> 6cf69b111be72582d1f366f396631304a8d9a27d
    const url= this.dataService.baseIP + "latestNews";
    return this.httpClient.get(url);
  }
}
