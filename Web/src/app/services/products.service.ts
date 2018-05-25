/**
 * @author David Ubeda
 */
import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { PublicService } from './public.service';
import { GetsService } from './gets.service';

@Injectable()
export class ProductsService {

  /**
   * @property
   */
  public products = [];

  /**
   * @property
   */
  public textProductes = "";

  /**
   * @property
   */
  public preuTotal: number = 0;

  /**
   * Creates an instance of ProductsService.
   * @param {PublicService} publicService 
   * @param {GetsService} getService 
   * @memberof ProductsService
   */
  constructor(private publicService: PublicService, private getService: GetsService) { 
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }



  /**
   * Funció per Afegir un producte al carro
   * @param name 
   * @param image 
   * @param price 
   */
  addProduct(name: string, image: string, price:string): any{
    this.products.unshift({name: name, image:image, price:price});
  }

  /**
   * Funció que retorna el carro de productes
   */
  getProducts(): any{
    return this.products;
  }

  /**
   * Funció que retorna un pdf amb la factura efectuada
   */
  getFactura(): any{
    const idUser = this.publicService.getIdUser();
    this.getService.getUserById(idUser).subscribe(
      data=>{
        this.textProductes = "";
        this.preuTotal = 0;
        const currentDate = new Date();
        const year = currentDate.getUTCFullYear();
        const month = currentDate.getUTCMonth() + 1;
        const day = currentDate.getDate();
        const date = day + "-" + month + "-" + year;
        const usuari = data[0].Usuari;
        const email = data[0].Email;
        const nom = data[0].Nom;
        const edat = data[0].Edat;
        const nif = data[0].NIF;
        const cart = this.getProducts();
        cart.forEach(element => {
          const producte = "Nom: " + element.name + ";\tPreu: " + element.price + "€\n\n";
          this.textProductes += producte;
          const preu = +element.price;
          this.preuTotal += preu;
        });
        let factura = { 
          content: 'Factura PRODUCTES de la Botiga                              Data Actual:' + date + 
          '\n\n Nom del comprador: ' + nom + '\n\n Email del Comprador: ' + email + 
          '\n\n\n\n Productes de la LLISTA:\n\n' + this.textProductes + "\n\nPreu Total => " + this.preuTotal.toString() + "€"
        };
        pdfMake.createPdf(factura).download();
      },
      error=>{
        console.log(error)
      }
    )
  }



}
