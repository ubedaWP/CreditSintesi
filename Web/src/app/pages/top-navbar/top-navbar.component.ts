import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../../services/data-service.service';
import { PublicService } from '../../services/public.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetsService } from '../../services/gets.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  loginForm;
  constructor(private dataService: DataService, private publicService: PublicService, 
  private fb: FormBuilder, private getsService: GetsService) {

  }

  private users;
  private user: string = "";
  private password: string = "";
  private isOn;
  private isAdmin;

  ngOnInit() {
    this.isOn = this.publicService.getIsOn();
    this.isAdmin = this.publicService.getIsAdmin();
  }

  getAllUsers(){
    console.log(this.fb);
    this.getsService.getUsersRaw().subscribe(
      data=>{
        this.users = data;
        console.log(this.users);
      },
      error=>{
        console.log(error);
      }
    )
  }

  getUserFormData(event){
    this.user = event.target.value;
  }
  
  getPasswordFormData(event){
    this.password = event.target.value;
  }

  Login(){
    this.getsService.getLogin(this.user, this.password).subscribe(
      data=>{
        console.log(data);
      }
      
    )
  }

  
}
