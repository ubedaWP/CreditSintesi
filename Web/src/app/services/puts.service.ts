import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';

@Injectable()
export class PutsService {

  constructor(public dataService: DataService) { }

}
