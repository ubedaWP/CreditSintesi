import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { DataService } from '../../services/data-service.service';
import { PublicService } from '../../services/public.service';
import { GetsService } from '../../services/gets.service';
import { ProductsService } from '../../services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor(private dataService: DataService, private publicService: PublicService, 
  private fb: FormBuilder, private getsService: GetsService, private router: Router,
  private productService: ProductsService) 
  {

  }
  
  private users;
  private user: string = "";
  private password: string = "";
  private isOn: boolean;
  private isAdmin: boolean;
  private avatar: string;
  private cart: any[];
  private isCartOn: boolean;
  private botoFactura: boolean;

  @ViewChild('ErrorLogin') private errorLogin: SwalComponent;
  @ViewChild('SuccessLogin') private successLogin: SwalComponent;
  @ViewChild('DeleteProduct') private deleteProductModal: SwalComponent;
  

  ngOnInit() {
    this.setIsOn();
    this.setIsAdmin();
    this.setUserName();
    this.setAvatar();
    this.setCart();
    this.setBotoFactura();
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

  setCart(){
    if(this.publicService.getCartIsOn() == 'true'){
      this.cart = [];
      this.isCartOn = true;
    }
    else if(this.publicService.getCartIsOn() == 'false'){
      this.cart = [];
      this.isCartOn = false;
    }
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
          this.publicService.setIdUser(data[0].IDUsr);
          this.publicService.setIsOn('true');
          this.publicService.setUserName(this.user);
          this.publicService.setAvatar(data[0].Avatar);
          this.publicService.setCartIsOn('true');
          this.avatar = this.publicService.getAvatar();
          this.setIsOn();
          this.setCart();
          if (data[0].Admin == "1") {
            this.publicService.setIsAdmin('true');
            this.setIsAdmin();
          }
          else if(data[0].Admin == "0"){
            this.publicService.setIsAdmin('false');
            this.setIsAdmin();
          }
          this.successLogin.show();
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

  newProduct( name, image, price){
    this.cart.push({ name: name, image:image, price:price });
  }

  setBotoFactura(){
    if(this.cart.length > 0){
      this.botoFactura = true;
    }
    else if(this.cart.length == 0){
      this.botoFactura = false;
    }
  }

  // deleteProductFromCart(name){
  //   for (let index = 0; index < this.cart.length; index++) {
  //     const element = this.cart[index];
  //     if(name == element.name){
  //       delete this.cart[index];
  //       this.productService.getProducts();
  //       break;
  //     }
  //     else{
  //     }
  //   }
  // }

  // reloadAfterDelete(){
  //   this.deleteProductModal.show();
  //   location.reload();
  // }

  getProducts(){
    this.cart = this.productService.getProducts();
    this.setBotoFactura();
  }

  getFactura(){
    this.productService.getFactura();
  }
  
}