import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';

@Injectable()
export class GetsService {

  constructor(public dataService: DataService) { }

}
