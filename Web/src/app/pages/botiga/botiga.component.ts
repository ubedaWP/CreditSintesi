/**
 * @author David Ubeda
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data-service.service';
import { GetsService } from '../../services/gets.service';
import { FormControl, RequiredValidator } from '@angular/forms';
import { Tag } from '../../services/models/Tag';
import { ProductsService } from '../../services/products.service';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-botiga',
  templateUrl: './botiga.component.html',
  styleUrls: ['./botiga.component.scss']
})
export class BotigaComponent implements OnInit {

  /**
   * @property
   */
  public lastProducts = [];

  /**
   * @property
   */
  public digitalProducts;

  /**
   * @property
   */
  public fisicalProducts;

  /**
   * @property
   */
  public tags;

  /**
   * @property
   */
  public digitalTag : boolean = false;

  /**
   * @property
   */
  public fisicalTag : boolean = false;

  /**
   * @property
   */
  public tagList;

  /**
   * @property
   */
  public tagList1 = new FormControl();

  /**
   * @property
   */
  public tagList2 = new FormControl();

  /**
   * @property
   */
  public preFisics = [];

  /**
   * @property
   */
  public preDigitals = [];

  /**
   * @property
   */
  public isCartOn: boolean;

  /**
   * @property
   */
  @ViewChild('searchFilter') private searchFilter;

  /**
   * @property
   */
  @ViewChild('addProduct') private addProductModal;

  /**
   * 
   * @param getService 
   * @param productService 
   * @param publicService 
   */
  constructor(private getService : GetsService, private productService: ProductsService,
  private publicService: PublicService){

  }

  /**
   * Funció que s'inicialitza quan s'entra la botiga
   */
  ngOnInit(){
    this.getLastDigital();
    this.getLastFisical();
    this.getDigitalProducts();
    this.getFisicalProducts();
    this.getTags();
    this.getCartIsOn();
  }

  /**
   * Funcióq que determina si el carro està actiu
   */
  getCartIsOn(): any{
    const isOn = this.publicService.getCartIsOn();
    if(isOn == 'false'){
      this.isCartOn = false;
    }
    else if(isOn == 'true'){
      this.isCartOn = true;
    }
  }

  /**
   * Funció que afegeix un producte nou al carro
   * @param name 
   * @param image 
   * @param price 
   */
  addNewProductToCart(name: string, image: string, price: string){
    this.productService.addProduct(name, image, price);
    this.addProductModal.show();
  }

  /**
   * Funció que agafa els 2 últims productes digitals afegits a la BD
   */
  getLastDigital(){
    this.getService.getLastDigitalProducts().subscribe(
      data=>{
        this.lastProducts.push(data[0], data[1]);
      },
      error=>{
        console.log(error)
      }
    )
  }

  /**
   * Funció que agafa els 2 últims productes físics afegits a la BD
   */
  getLastFisical(){
    this.getService.getLastFisicalProducts().subscribe(
      data=>{
        this.lastProducts.push(data[0], data[1]);
      },
      error=>{
        console.log(error);
      }
    )
  }

  /**
   * Funció que agafa tots els productes físics de la BD
   */
  getFisicalProducts(){
    this.fisicalProducts = [];
    this.getService.getFisicalProducts().subscribe(
      data=>{
        this.fisicalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  /**
   * Funció que agafa tots els productes digitals de la BD
   */
  getDigitalProducts(){
    this.digitalProducts = [];
    this.getService.getDigitalProducts().subscribe(
      data=>{
        this.digitalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  /**
   * Funció que agafa tots els tags de la BD
   */
  getTags(){
    this.getService.getTags().subscribe(
      data=>{
        this.tags = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  /**
   * Funció que agafa tots els productes físics filtrats per una cadena
   */
  getSearchFisics(words: string){
    this.getService.getSearchFilterFisics(words).subscribe(
      data=>{
        this.fisicalProducts = data;
      },
      error=>{
        
      }
    )
  }

  /**
   * Funció que agafa tots els productes digitals filtrats per una cadena
   */
  getSearchDigitals(words: string){
    this.getService.getSearchFilterDigitals(words).subscribe(
      data=>{
        this.digitalProducts = data;
      },
      error=>{
        
      }
    )
  }

  /**
   * Funció que agafa el event(cadena: String) per filtrar els productes
   * @param event
   */
  getProductsSearchFilter(event: any){
    this.digitalTag = false;
    this.fisicalTag = false;
    let words = event.target.value;
    this.getSearchFisics(words);
    this.getSearchDigitals(words);
  }

  /**
   * Funció que comprova l'estat del checkbox Digital
   * @param event
   */
  checkTagDigital(event: any){
    this.digitalTag = event.checked;
  }

  /**
   * Funció que comprova l'estat del checkbox Fisic
   * @param event
   */
  checkTagFisic(event: any){
    this.fisicalTag = event.checked;
  }

  /**
   * Funció que filtra els productes físic per 1 sol tag
   * @param tag 
   */
  getFisicalProducts1Tag(tag: string){
    this.getService.getFisicals1Tag(tag).subscribe(
      data=>{
        this.fisicalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  /**
   * Funció que filtra els productes digitals per 1 sol tag
   * @param tag
   */
  getDigitalProducts1Tag(tag: string){
    this.getService.getDigitals1Tag(tag).subscribe(
      data=>{
        this.digitalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  /**
   * Funció que filtra els productes físics per 2 tags
   * @param tag1 
   * @param tag2 
   */
  getFisicalProducts2Tags(tag1: string, tag2: string){
    this.getService.getFisicals2Tags(tag1, tag2).subscribe(
      data=>{
        this.fisicalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  /**
   * Funció que filtra els productes digitals per 2 tags
   * @param tag1 
   * @param tag2 
   */
  getDigitalProducts2Tags(tag1: string, tag2: string){
    this.getService.getDigitals2Tags(tag1, tag2).subscribe(
      data=>{
        this.digitalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  /**
   * Funció que filtra els productes tan físics con digitals segons els tags i checkboxs que estiguin marcats
   */
  filterByTag(){
    const llistaTags1 = this.tagList1.value;
    const llistaTags2 = this.tagList2.value;
    this.fisicalProducts = [];
    this.digitalProducts = [];

    if((this.fisicalTag == true && this.digitalTag == true && llistaTags1 == null && llistaTags2 == null) || (this.fisicalTag == false && this.digitalTag == false && llistaTags1 == null && llistaTags2 == null)){
      this.getDigitalProducts();
      this.getFisicalProducts();
    }
    else if((this.fisicalTag == true && this.digitalTag == true && llistaTags1 != null && llistaTags2 == null) || (this.fisicalTag == false && this.digitalTag == false && llistaTags1 != null && llistaTags2 == null)){
      this.getDigitalProducts1Tag(llistaTags1);
      this.getFisicalProducts1Tag(llistaTags1);
    }
    else if((this.fisicalTag == true && this.digitalTag == true && llistaTags1 == null && llistaTags2 != null) || (this.fisicalTag == false && this.digitalTag == false && llistaTags1 == null && llistaTags2 != null)){
      this.getDigitalProducts1Tag(llistaTags2);
      this.getFisicalProducts1Tag(llistaTags2);
    }
    else if((this.fisicalTag == true && this.digitalTag == true && llistaTags1 != null && llistaTags2 != null) || (this.fisicalTag == false && this.digitalTag == false && llistaTags1 != null && llistaTags2 != null)){
      this.getDigitalProducts2Tags(llistaTags1, llistaTags2);
      this.getFisicalProducts2Tags(llistaTags1, llistaTags2);
    }
    else if(this.fisicalTag == true && this.digitalTag == false && llistaTags1 == null && llistaTags2 == null){
      this.digitalProducts = [];
      this.getFisicalProducts();
    }
    else if(this.fisicalTag == true && this.digitalTag == false && llistaTags1 != null && llistaTags2 == null){
      this.digitalProducts = [];
      this.getFisicalProducts1Tag(llistaTags1);      
    }
    else if(this.fisicalTag == true && this.digitalTag == false && llistaTags1 == null && llistaTags2 != null){
      this.digitalProducts = [];
      this.getFisicalProducts1Tag(llistaTags2);     
    }
    else if(this.fisicalTag == true && this.digitalTag == false && llistaTags1 != null && llistaTags2 != null){
      this.digitalProducts = [];
      this.getFisicalProducts2Tags(llistaTags1, llistaTags2);      
    }
    else if(this.fisicalTag == false && this.digitalTag == true && llistaTags1 == null && llistaTags2 == null){
      this.fisicalProducts = [];
      this.getDigitalProducts();
    }
    else if(this.fisicalTag == false && this.digitalTag == true && llistaTags1 != null && llistaTags2 == null){
      this.fisicalProducts = [];
      this.getDigitalProducts1Tag(llistaTags1);
    }
    else if(this.fisicalTag == false && this.digitalTag == true && llistaTags1 == null && llistaTags2 != null){
      this.fisicalProducts = [];
      this.getDigitalProducts1Tag(llistaTags2);      
    }
    else if(this.fisicalTag == false && this.digitalTag == true && llistaTags1 != null && llistaTags2 != null){
      this.fisicalProducts = [];
      this.getDigitalProducts2Tags(llistaTags1, llistaTags2);
    }    
  }
}