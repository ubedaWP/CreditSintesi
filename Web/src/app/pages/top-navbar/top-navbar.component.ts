/**
 * @author David Ubeda
 */
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

  /**
   * 
   * @param dataService 
   * @param publicService 
   * @param fb 
   * @param getsService 
   * @param router 
   * @param productService 
   */
  constructor(private dataService: DataService, private publicService: PublicService, 
  private fb: FormBuilder, private getsService: GetsService, private router: Router,
  private productService: ProductsService) 
  {

  }
  
  /**
   * @property
   */
  private users;

  /**
   * @property
   */
  private user: string = "";

  /**
   * @property
   */
  private password: string = "";

  /**
   * @property
   */
  private isOn: boolean;

  /**
   * @property
   */
  private isAdmin: boolean;

  /**
   * @property
   */
  private avatar: string;

  /**
   * @property
   */
  private cart: any[];

  /**
   * @property
   */
  private isCartOn: boolean;

  /**
   * @property
   */
  private botoFactura: boolean;

  /**
   * @property
   */
  @ViewChild('ErrorLogin') private errorLogin: SwalComponent;

  /**
   * @property
   */
  @ViewChild('SuccessLogin') private successLogin: SwalComponent;

  /**
   * @property
   */
  @ViewChild('DeleteProduct') private deleteProductModal: SwalComponent;
  

  /**
   * Funció que s'inicialitza quan s'obre la navbar de l'html.
   */
  ngOnInit() {
    this.setIsOn();
    this.setIsAdmin();
    this.setUserName();
    this.setAvatar();
    this.setCart();
    this.setBotoFactura();
  }

  /**
   * Funció que determina si hi han un usuari loguejat a la pàgina
   */
  setIsOn(){
    if (this.publicService.getIsOn() == 'true'){
      this.isOn = true;
    }
    else if (this.publicService.getIsOn() == 'false'){
      this.isOn = false;
    }
  }

  /**
  * Funció que determina si l'usuari loguejat és un administrador
  */
  setIsAdmin(){
    if (this.publicService.getIsAdmin() == 'true'){
      this.isAdmin = true;
    }
    else if (this.publicService.getIsAdmin() == 'false'){
      this.isAdmin = false;
    }
  }

  /**
  * Funció que defineix la cookie del UserName
  */
  setUserName(){
    this.user = this.publicService.getUserName();
  }

  /**
   * Funció que defineix la cookie del Avatar
   */
  setAvatar(){
    this.avatar = this.publicService.getAvatar();
  }

  /**
   * Funció que defineix si el carro està actiu
   */
  setCart(){
    if(this.publicService.getCartIsOn() == 'true'){
      this.cart = [];
      this.isCartOn = true;
    }
    else if(this.publicService.getCartIsOn() == 'false' || this.publicService.getIsAdmin() == 'true'){
      this.cart = [];
      this.isCartOn = false;
    }
  }

  /**
   * Funció que agafa el valor del camp del formulari en qüestió
   * @param event 
   */
  getUserFormData(event){
    this.user = event.target.value;
  }
  
  /**
   * Funció que agafa el valor del camp del formulari en qüestió
   * @param event 
   */
  getPasswordFormData(event){
    this.password = event.target.value;
  }

  /**
   * Funció que determina si un Login es correcte o incorrecte.
   */
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
          this.avatar = this.publicService.getAvatar();
          this.setIsOn();
          this.setCart();
          if (data[0].Admin == "1") {
            this.publicService.setIsAdmin('true');
            this.publicService.setCartIsOn('false');
            this.setIsAdmin();
          }
          else if(data[0].Admin == "0"){
            this.publicService.setIsAdmin('false');
            this.publicService.setCartIsOn('true');
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

  /**
   * Funció per desloguejar-se de la pàgina. I per tant reinicia les cookies.
   */
  Logout(){
    this.publicService.logout();
    location.reload();
  }

  /**
   * Funció que afegeix un producte al carro
   * @param name 
   * @param image 
   * @param price 
   */
  newProduct( name, image, price){
    this.cart.push({ name: name, image:image, price:price });
  }

  /**
   * Funció que fa que es mostri el boto de la factura depenent de condicions
   */
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

  /**
   * Funció que agafa els productes del carro
   */
  getProducts(){
    this.cart = this.productService.getProducts();
    this.setBotoFactura();
  }

  /**
   * Funció que agafa la factura
   */
  getFactura(){
    this.productService.getFactura();
  }
  
}