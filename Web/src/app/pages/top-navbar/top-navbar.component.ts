import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { DataService } from '../../services/data-service.service';
import { PublicService } from '../../services/public.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetsService } from '../../services/gets.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  loginForm;
  constructor(private dataService: DataService, private publicService: PublicService, 
  private fb: FormBuilder, private getsService: GetsService, private router: Router,
  ) {

  }
  
  private users;
  private user: string = "";
  private password: string = "";
  private isOn: boolean;
  private isAdmin: boolean;
  private avatar: string;
  @ViewChild('ErrorLogin') private errorLogin: SwalComponent;

  ngOnInit() {
    this.setIsOn();
    this.setIsAdmin();
    this.setUserName();
    this.setAvatar();
    
  }

  

  setIsOn(){
    if (this.publicService.getIsOn() == 'true'){
      this.isOn = true;
    }
    else if (this.publicService.getIsOn() == 'false'){
      this.isOn = false;
    }
  }

  setIsAdmin(){
    if (this.publicService.getIsAdmin() == 'true'){
      this.isAdmin = true;
    }
    else if (this.publicService.getIsAdmin() == 'false'){
      this.isAdmin = false;
    }
  }

  setUserName(){
    this.user = this.publicService.getUserName();
  }

  setAvatar(){
    this.avatar = this.publicService.getAvatar();
  }

  getAllUsers(){
    this.getsService.getUsersRaw().subscribe(
      data=>{
        this.users = data;
      },
      error=>{
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
        if (data != null){
          this.user = data[0].Usuari;
          this.password = data[0].Contrasenya;
          this.publicService.setIsOn('true');
          this.publicService.setUserName(this.user);
          this.publicService.setAvatar(data[0].Avatar);
          this.avatar = this.publicService.getAvatar();
          this.setIsOn();
          if (data[0].Admin == "1") {
            this.publicService.setIsAdmin('true');
            this.setIsAdmin();
          }
          else if(data[0].Admin == "0"){
            this.publicService.setIsAdmin('false');
            this.setIsAdmin();
          }
          location.reload();
          }
        else{
          this.errorLogin.show();
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  Logout(){
    this.publicService.logout();
    location.reload();
  }
  
}