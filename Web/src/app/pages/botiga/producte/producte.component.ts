/**
 * @author David Ubeda
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetsService } from '../../../services/gets.service';
import { ProductsService } from '../../../services/products.service';
import { PublicService } from '../../../services/public.service';

@Component({
  selector: 'app-producte',
  templateUrl: './producte.component.html',
  styleUrls: ['./producte.component.scss']
})
export class ProducteComponent implements OnInit {

  /**
   * @property
   */
  public type;

  /**
   * @property
   */
  public idProducte: string = "";

  /**
   * @property
   */
  public productName: string = "";

  /**
   * @property
   */
  public productDescription: string = "";

  /**
   * @property
   */
  public productExtendedDescription: string = "";

  /**
   * @property
   */
  public productPrice: string = "";

  /**
   * @property
   */
  public productImage: string = "";

  /**
   * @property
   */
  public productImageGallery: string = "";

  /**
   * @property
   */
  public isCartOn: boolean;
  
  /**
   * @property
   */
  @ViewChild('addProduct') private addProductModal;

  /**
   * 
   * @param router 
   * @param activatedRouter 
   * @param getService 
   * @param productService 
   * @param publicService 
   */
  constructor(private router: Router, private activatedRouter: ActivatedRoute, 
  private getService: GetsService, private productService: ProductsService,
  private publicService: PublicService) { }

  /**
   * Funció que s'inicialitza quan s'obre la pàgina del producte
   */
  ngOnInit() {
    this.type = this.activatedRouter.snapshot.params.type;
    this.idProducte = this.activatedRouter.snapshot.params.id;
    if(this.type == "fisic"){
      this.getService.getFisicalProductByID(this.idProducte).subscribe(
        data=>{
          const productData = data[0];
          this.productName = productData.Producte;
          this.productDescription = productData.Descripcio;
          this.productExtendedDescription = productData.DescripcioExtensa;
          this.productPrice = productData.Preu;
          this.productImage = productData.Imatge;
          this.productImageGallery = productData.ImatgeGaleria;
        },
        error=>{
          console.log(error);
        }
      )
    }
    else if(this.type == "digital"){
      this.getService.getDigitalProductByID(this.idProducte).subscribe(
        data=>{
          const productData = data[0];
          this.productName = productData.Producte;
          this.productDescription = productData.Descripcio;
          this.productExtendedDescription = productData.DescripcioExtensa;
          this.productPrice = productData.Preu;
          this.productImage = productData.Imatge;
          this.productImageGallery = productData.ImatgeGaleria;
        },
        error=>{
          console.log(error);
        }
      )
    }
    this.getCartOn();
  }

  /**
   * Funció que afegeix un nou producte al carro
   * @param name 
   * @param image 
   * @param price 
   */
  addNewProduct(name: string, image: string, price: string){
    this.productService.addProduct(name, image, price);
    this.addProductModal.show();
  }

  /**
   * Funció que detecta si el carro esta actiu
   */
  getCartOn(){
    const isOn = this.publicService.getCartIsOn();
    if(isOn == 'false'){
      this.isCartOn = false;
    }
    else if(isOn == 'true'){
      this.isCartOn = true;
    }
  }

}
