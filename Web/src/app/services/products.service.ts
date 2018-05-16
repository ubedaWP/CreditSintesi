import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable()
export class ProductsService {

  public products = [];

  constructor() { 
    //called first time before the ngOnInit()
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    var dd = { content: 'CONTINGUT PDF' };
    // pdfMake.createPdf(dd).download();
  }



  addProduct(name, image, price){
    this.products.push({name: name, image:image, price:price});
  }

  getProducts(){
    return this.products;
  }



}
