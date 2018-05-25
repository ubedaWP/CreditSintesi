/**
 * @author David Ubeda
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../../../services/upload-service.service';
import { FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { PublicService } from '../../../services/public.service';
import { Router } from '@angular/router';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  /**
   * @property
   */
  tipusProductes = ['Físic', 'Digital'];

  /**
   * @property
   */
  nom = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  tipus = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  descripcio = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  descripcioExtensa = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  imatge = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  imatgeGallery = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  price = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  @ViewChild('Afegit') private afegitModal: SwalComponent;

  /**
   * 
   * @param httpClient 
   * @param uploadService 
   * @param publicService 
   * @param router 
   */
  constructor(private httpClient: HttpClient, private uploadService: UploadService, private publicService: PublicService,
              private router: Router) { }

  /**
   * Funció que s'inicialitza quan s'entra a la pàgina d'afegir un producte
   * @memberof AddProductComponent
   */
  ngOnInit() {
    if (this.publicService.getIsAdmin() == "false") {
      this.router.navigate(['/home']);
    }
  }

  /**
   * 
   * Funció que retorna un missatge d'error per als camps del formulari
   * @returns any
   * @memberof AddProductComponent
   */
  getErrorMessageText(){
    return this.nom.hasError('required') ? "'Has d'omplir el camp'" :
    '';
  }

  /**
   * Funció que canvia el valor del camp del formulari
   * @param event 
   */
  getImatgeProducte(event: any){
    this.imatge.patchValue(event.target.files[0].name);
  }

  /**
   * Funció que canvia el valor del camp del formulari
   * @param event 
   */
  getImatgeGallery(event: any){
    this.imatgeGallery.patchValue(event.target.files[0].name);
  }

  /**
   * Funció que afegeix un nou producte a la BD
   */
  addNew(){
    if(this.tipus.value == 'Físic'){
      this.uploadService.uploadProductFisic(this.nom.value, this.descripcio.value, this.descripcioExtensa.value,
      this.imatge.value, this.imatgeGallery.value, this.price.value);
    }
    else if(this.tipus.value == 'Digital'){
      this.uploadService.uploadProductDigital(this.nom.value, this.descripcio.value, this.descripcioExtensa.value,
        this.imatge.value, this.imatgeGallery.value, this.price.value);
    }
    this.afegitModal.show();
  }


}
