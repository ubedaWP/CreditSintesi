/**
 * @author David Ubeda
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  constructor(public httpClient: HttpClient) {
  }
  /**
   * @property
   */
  public baseIP = 'http://localhost:8000/';

  /**
   * @property
   */
  public webIP = 'http://localhost:4200/';
  
}
