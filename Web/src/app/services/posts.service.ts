import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';

@Injectable()
export class PostsService {

  constructor(public dataService: DataService) { }

}
