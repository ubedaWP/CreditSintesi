import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { InsertsService } from '../../services/inserts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  formData = [];
  user = new FormControl('', [Validators.required]);
  password1 = new FormControl('', [Validators.required]);
  password2 = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  age = new FormControl('', [Validators.required]);
  country = new FormControl('', [Validators.required]);
  nif = new FormControl('', [Validators.required]);
  avatar = 'User1.png';
  admin = 0;

  constructor(private insertService: InsertsService) { }

  ngOnInit() {
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

  getFormData(){
    this.formData.push(this.user, this.password1, this.password2, this.avatar, this.email, this.name, this.age, 
    this.country, this.nif, this.admin);
    this.formData.forEach(element => {
      if (element.status == "VALID") {
        console.log(element.value);
      }
    });
  }

  registerNewUser(form){


    // this.insertService.insertUser(form);
  }

}
