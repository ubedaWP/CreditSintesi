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

  public type;
  public idProducte: string = "";
  public productName: string = "";
  public productDescription: string = "";
  public productExtendedDescription: string = "";
  public productPrice: string = "";
  public productImage: string = "";
  public productImageGallery: string = "";
  public isCartOn: boolean;
  
  @ViewChild('addProduct') private addProductModal;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, 
  private getService: GetsService, private productService: ProductsService,
  private publicService: PublicService) { }

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

  addNewProduct(name, image, price){
    this.productService.addProduct(name, image, price);
    this.addProductModal.show();
  }

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
