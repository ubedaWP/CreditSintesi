import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/services/data-service.service';
import { User } from './services/models/User';
import { Observable } from 'rxjs/Observable';
import { TopNavbarComponent } from './pages/top-navbar/top-navbar.component';
import { PublicService } from './services/public.service';
import { DialogsService } from './services/dialogs.service';
import { GetsService } from './services/gets.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  constructor( private dataService : DataService, private publicService: PublicService,
  private dialogService: DialogsService, private getsService: GetsService){

    this.isOn = this.publicService.getIsOn();
  }
  users;
  onUser: User;
  private isOn;
  ngOnInit(){
  }
}
