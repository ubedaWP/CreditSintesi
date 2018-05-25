/**
 * @author David Ubeda
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { RouterModule, Routes, Router } from '@angular/router';
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
  
  /**
   * @property
   */
  public formData = [];

  /**
   * @property
   */
  public registerIsValid:boolean = true;

  /**
   * @property
   */
  public states = ['Barcelona', 'Tarragona', 'Lleida', 'Girona'];

  /**
   * @property
   */
  public userExists: boolean;

  /**
   * @property
   */
  public emailExists: boolean;

  /**
   * @property
   */
  public users;

  /**
   * @property
   */
  public emails;

  /**
   * @property
   */
  public usersData;

  /**
   * @property
   */
  public usersFinal = [];

  /**
   * @property
   */
  public user = new FormControl('', [Validators.required]);
  
  /**
   * @property
   */
  public password1 = new FormControl('', [Validators.required]);
  
  /**
   * @property
   */
  public password2 = new FormControl('', [Validators.required] );

  /**
   * @property
   */
  public email = new FormControl('', [Validators.required, Validators.email]);

  /**
   * @property
   */
  public name = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  public age = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  public state = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  public nif = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  public avatar = 'User1.png';

  /**
   * @property
   */
  public admin = 0;

  /**
   * @property
   */
  @ViewChild('ErrorRegistre') private errorRegistre: SwalComponent;

  /**
   * @property
   */
  @ViewChild('ErrorPasswords') private errorPassword: SwalComponent;

  /**
   * @property
   */
  @ViewChild('ErrorPasswordsLongitud') private errorPasswordLength: SwalComponent;

  /**
   * @property
   */
  @ViewChild('ErrorNif') private errorNif: SwalComponent;

  /**
   * @property
   */
  @ViewChild('RegistreValid') private trueRegistre: SwalComponent;

  /**
   * @property
   */
  @ViewChild('ErrorUserExists') private userDuplicated: SwalComponent;

  /**
   * @property
   */
  @ViewChild('ErrorEmailExists') private emailDuplicated: SwalComponent;

  /**
   * 
   * @param insertService 
   * @param getService 
   * @param router 
   */
  constructor(private insertService: InsertsService, private getService: GetsService, private router: Router) { }

  /**
   * Funció que s'inicialitza quan s'entra en la pàgina de registre
   */
  ngOnInit() {
    this.users = [];
    this.emails = [];
    this.getAllUsers();
  }

  /**
   * Funció que fa que aparegui un missatge d'error en el camp del formulari
   */
  getErrorMessageUser() {
    return this.email.hasError('required') ? "'Has d'omplir el camp'" :
      '';
  }

  /**
   * Funció que fa que aparegui un missatge d'error en el camp del formulari
   */
  getErrorMessageEmail() {
    return this.email.hasError('required') ? "'Has de posar l'email'" :
      this.email.hasError('email') ? 'No es un email valid' :
        '';
  }

  /**
   * Funció que agafa tots els usuaris de la BD
   */
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
  
  /**
   * Funció que agafa els valors dels camps del formulari de registre per fer validacions
   */
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
        this.router.navigate(['/home']);
      } 
    }
  }

  /**
   * Funció que retorna una data en format string.
   * @param date 
   */
  getDateFormat(date: string): string{
    const data = new Date(date);
    const year = data.getUTCFullYear().toString();
    const month = this.getMonthFormat(data);
    const day = this.getDayFormat(data);
    const fullDate = year + "-" + month + "-" + day;
    const finalDate = fullDate.toString();
    return finalDate
  }

  /**
   * Funció que retorna el número del mes en format string
   * @param date
   */
  getMonthFormat(date: Date): string{
    const month = date.getUTCMonth() + 1;
    return month < 10 ? '0' + month : '' + month;
  }

  /**
   * Funció que retorna el numero del dia en format string
   * @param date 
   */
  getDayFormat(date: Date): string{
    const day = date.getUTCDate();
    return day < 10 ? '0' + day : '' + day;
  }

  /**
   * Funció que registra un usuari nou a la BD.
   * @param form 
   */
  registerNewUser(form: any){
    this.insertService.insertUser(form);
  }


}
