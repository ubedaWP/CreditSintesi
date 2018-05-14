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

  public lastProducts = [];
  public digitalProducts;
  public fisicalProducts;
  public tags;
  public digitalTag : boolean = false;
  public fisicalTag : boolean = false;
  public tagList;
  public tagList1 = new FormControl();
  public tagList2 = new FormControl();
  public preFisics = [];
  public preDigitals = [];
  public isCartOn: boolean;

  @ViewChild('searchFilter') private searchFilter;
  @ViewChild('addProduct') private addProductModal;

  constructor(private getService : GetsService, private productService: ProductsService,
  private publicService: PublicService){

  }

  ngOnInit(){
    this.getLastDigital();
    this.getLastFisical();
    this.getDigitalProducts();
    this.getFisicalProducts();
    this.getTags();
    this.getCartIsOn();
  }

  getCartIsOn(){
    const isOn = this.publicService.getCartIsOn();
    if(isOn == 'false'){
      this.isCartOn = false;
    }
    else if(isOn == 'true'){
      this.isCartOn = true;
    }
  }

  addNewProductToCart(name, image, price){
    this.productService.addProduct(name, image, price);
    this.addProductModal.show();
  }

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

  getSearchFisics(words){
    this.getService.getSearchFilterFisics(words).subscribe(
      data=>{
        this.fisicalProducts = data;
      },
      error=>{
        
      }
    )
  }

  getSearchDigitals(words){
    this.getService.getSearchFilterDigitals(words).subscribe(
      data=>{
        this.digitalProducts = data;
      },
      error=>{
        
      }
    )
  }

  getProductsSearchFilter(event){
    this.digitalTag = false;
    this.fisicalTag = false;
    let words = event.target.value;
    this.getSearchFisics(words);
    this.getSearchDigitals(words);
  }

  checkTagDigital(event){
    this.digitalTag = event.checked;
  }

  checkTagFisic(event){
    this.fisicalTag = event.checked;
  }

  getFisicalProducts1Tag(tag){
    this.getService.getFisicals1Tag(tag).subscribe(
      data=>{
        this.fisicalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  getDigitalProducts1Tag(tag){
    this.getService.getDigitals1Tag(tag).subscribe(
      data=>{
        this.digitalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  getFisicalProducts2Tags(tag1, tag2){
    this.getService.getFisicals2Tags(tag1, tag2).subscribe(
      data=>{
        this.fisicalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  getDigitalProducts2Tags(tag1, tag2){
    this.getService.getDigitals2Tags(tag1, tag2).subscribe(
      data=>{
        this.digitalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  filterByTag(){
    const llistaTags1 = this.tagList1.value;
    const llistaTags2 = this.tagList2.value;
    this.fisicalProducts = [];
    this.digitalProducts = [];

    console.log(this.fisicalTag, this.digitalTag, llistaTags1, llistaTags2);
    if((this.fisicalTag == true && this.digitalTag == true && llistaTags1 == null && llistaTags2 == null) || (this.fisicalTag == false && this.digitalTag == false && llistaTags1 == null && llistaTags2 == null)){
      this.getDigitalProducts();
      this.getFisicalProducts();
    }
    else if((this.fisicalTag == true && this.digitalTag == true && llistaTags1 != null && llistaTags2 == null) || (this.fisicalTag == false && this.digitalTag == false && llistaTags1 != null && llistaTags2 == null)){
      this.getDigitalProducts1Tag(llistaTags1);
      this.getFisicalProducts1Tag(llistaTags1);
    }
    else if((this.fisicalTag == true && this.digitalTag == true && llistaTags1 == null && llistaTags2 != null) || (this.fisicalTag == false && this.digitalTag == false && llistaTags1 == null && llistaTags2 != null)){
      this.getDigitalProducts1Tag(llistaTags2);//TAG2
      this.getFisicalProducts1Tag(llistaTags2);//TAG2
    }
    else if((this.fisicalTag == true && this.digitalTag == true && llistaTags1 != null && llistaTags2 != null) || (this.fisicalTag == false && this.digitalTag == false && llistaTags1 != null && llistaTags2 != null)){
      this.getDigitalProducts2Tags(llistaTags1, llistaTags2);//TAG1 i TAG2
      this.getFisicalProducts2Tags(llistaTags1, llistaTags2);//TAG1 i TAG2
    }
    else if(this.fisicalTag == true && this.digitalTag == false && llistaTags1 == null && llistaTags2 == null){
      this.digitalProducts = [];
      this.getFisicalProducts();
    }
    else if(this.fisicalTag == true && this.digitalTag == false && llistaTags1 != null && llistaTags2 == null){
      this.digitalProducts = [];
      this.getFisicalProducts1Tag(llistaTags1);
      //getFisicsProductsTAG1
    }
    else if(this.fisicalTag == true && this.digitalTag == false && llistaTags1 == null && llistaTags2 != null){
      this.digitalProducts = [];
      this.getFisicalProducts1Tag(llistaTags2);
      //getFisicsProductsTAG2
    }
    else if(this.fisicalTag == true && this.digitalTag == false && llistaTags1 != null && llistaTags2 != null){
      this.digitalProducts = [];
      this.getFisicalProducts2Tags(llistaTags1, llistaTags2);
      //getFisicsProductsTAG1 i TAG2
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
      //getDigitalProductsTAG2
    }
    else if(this.fisicalTag == false && this.digitalTag == true && llistaTags1 != null && llistaTags2 != null){
      this.fisicalProducts = [];
      this.getDigitalProducts2Tags(llistaTags1, llistaTags2);
      //getDigitalProductsTAG1 i TAG2
    }    
  }
}