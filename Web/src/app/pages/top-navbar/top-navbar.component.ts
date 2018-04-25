import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../../services/data-service.service';
import { PublicService } from '../../services/public.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor(private dataService: DataService, private publicService: PublicService, 
  private fb: FormBuilder) { 
    
  }

  private isOn;
  ngOnInit() {
    this.isOn = this.publicService.getIsOn();
  }

  
}
