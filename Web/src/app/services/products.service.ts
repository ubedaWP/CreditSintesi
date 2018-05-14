import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  public products = [];

  constructor() { }



  addProduct(name, image, price){
    this.products.push({name: name, image:image, price:price});
  }

  getProducts(){
    return this.products;
  }

}
