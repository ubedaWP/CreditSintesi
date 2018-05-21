import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../../services/upload-service.service';
import { FormControl, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  tipusProductes = ['Físic', 'Digital'];

  nom = new FormControl('', [Validators.required]);
  tipus = new FormControl('', [Validators.required]);
  descripcio = new FormControl('', [Validators.required]);
  descripcioExtensa = new FormControl('', [Validators.required]);
  imatge = new FormControl('', [Validators.required]);
  imatgeGallery = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);

  constructor(private httpClient: HttpClient, private uploadService: UploadService) { }

  ngOnInit() {
  }

  getErrorMessageText(){
    return this.nom.hasError('required') ? "'Has d'omplir el camp'" :
    '';
  }

  getImatgeProducte(event){
    this.imatge.patchValue(event.target.files[0].name);
  }

  getImatgeGallery(event){
    this.imatgeGallery.patchValue(event.target.files[0].name);
  }

  addNew(){
    if(this.tipus.value == 'Físic'){
      this.uploadService.uploadProductFisic(this.nom.value, this.descripcio.value, this.descripcioExtensa.value,
      this.imatge.value, this.imatgeGallery.value, this.price.value);
    }
    else if(this.tipus.value == 'Digital'){
      this.uploadService.uploadProductDigital(this.nom.value, this.descripcio.value, this.descripcioExtensa.value,
        this.imatge.value, this.imatgeGallery.value, this.price.value);
    }
  }


}
