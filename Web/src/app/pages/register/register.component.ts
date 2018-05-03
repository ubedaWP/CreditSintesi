import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { InsertsService } from '../../services/inserts.service';
import { GetsService } from '../../services/gets.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  formData = [];
  registerIsValid:boolean = true;
  states = ['Barcelona', 'Tarragona', 'Lleida', 'Girona'];
  userExists: boolean;
  emailExists: boolean;
  users;
  emails;
  usersData;
  usersFinal = [];
  user = new FormControl('', [Validators.required]);
  password1 = new FormControl('', [Validators.required]);
  password2 = new FormControl('', [Validators.required] );
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required]);
  state = new FormControl('', [Validators.required]);
  nif = new FormControl('', [Validators.required]);
  avatar = 'User1.png';
  admin = 0;
  @ViewChild('ErrorRegistre') private errorRegistre: SwalComponent;
  @ViewChild('ErrorPasswords') private errorPassword: SwalComponent;
  @ViewChild('ErrorPasswordsLongitud') private errorPasswordLength: SwalComponent;
  @ViewChild('ErrorNif') private errorNif: SwalComponent;
  @ViewChild('RegistreValid') private trueRegistre: SwalComponent;
  @ViewChild('ErrorUserExists') private userDuplicated: SwalComponent;
  @ViewChild('ErrorEmailExists') private emailDuplicated: SwalComponent;

  constructor(private insertService: InsertsService, private getService: GetsService) { }

  ngOnInit() {
    this.users = [];
    this.emails = [];
    this.getAllUsers();
    console.log(this.users);
    console.log(this.emails);
  }

  getErrorMessageUser() {
    return this.email.hasError('required') ? "'Has d'omplir el camp'" :
      '';
  }
  getErrorMessageEmail() {
    return this.email.hasError('required') ? "'Has de posar l'email'" :
      this.email.hasError('email') ? 'No es un email valid' :
        '';
  }

  getAllUsers(){
    this.getService.getUsersRaw().subscribe(
      data=>{
        this.usersData = data;
        this.usersData.forEach(element => {
          this.users.push(element.Usuari);
          this.emails.push(element.Email);
        });
      }
    )
  }
  //
  // ACABAR REGISTRE MIRANT SI EXISTEXI USUARI(AGAFO LLISTA USERS SENCERA)
  //
  getFormData(){
    this.registerIsValid = true;
    this.formData = [];
    const controlForm = []
    controlForm.push(this.user,this.password1, this.password2, this.email, this.name, this.age, 
    this.state, this.nif);
    controlForm.forEach(element => {
      if (element.status != "VALID") {
        this.errorRegistre.show();
        this.registerIsValid = false;
      }
    });

    if (this.registerIsValid == true) {
      this.userExists = false;
      this.emailExists = false;
      for (let index = 0; index < this.users.length; index++) {
        const element = this.users[index];
        if(element == this.user.value){
          this.userExists = true;
        }
      }
      for (let index = 0; index < this.emails.length; index++) {
        const element = this.emails[index];
        if(element == this.email.value){
          this.emailExists = true;
        }
      }
      if (this.userExists == true){
        this.registerIsValid = false;
        this.userDuplicated.show();
      }
      else if (this.emailExists == true){
        this.registerIsValid = false;
        this.emailDuplicated.show();
      }
      else if (this.password1.value != this.password2.value){
        this.registerIsValid = false;
        this.errorPassword.show();
      }
      else if(this.password1.value.length < 8 || this.password2.value.length < 8){
        this.registerIsValid = false;
        this.errorPasswordLength.show();
      }
      else if(this.nif.value.length != 9){
        this.registerIsValid = false
        this.errorNif.show();
      }
      else if(this.password1.value == this.password2.value && this.registerIsValid == true){
        this.formData.push(this.user,this.password1, this.email, this.name,this.getDateFormat(this.age.value),
        this.state, this.nif, this.avatar, this.admin);
        this.trueRegistre.show();
        this.registerNewUser(this.formData);  
      } 
    }
  }

  getDateFormat(date){
    const data = new Date(date);
    const year = data.getUTCFullYear().toString();
    const month = this.getMonthFormat(data);
    const day = this.getDayFormat(data);
    const fullDate = year + "-" + month + "-" + day;
    const finalDate = fullDate.toString();
    return finalDate
  }

  getMonthFormat(date){
    const month = date.getUTCMonth() + 1;
    return month < 10 ? '0' + month : '' + month;
  }

  getDayFormat(date){
    const day = date.getUTCDate();
    return day < 10 ? '0' + day : '' + day;
  }

  registerNewUser(form){
    this.insertService.insertUser(form);
  }


}
