import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  constructor(public httpClient: HttpClient) {
  }
  public provaLlista;
  public baseIP = 'http://localhost:8000/';
  public webIP = 'http://localhost:4200/';
  
}
