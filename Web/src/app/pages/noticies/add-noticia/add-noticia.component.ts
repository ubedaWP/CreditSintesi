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
  selector: 'app-add-noticia',
  templateUrl: './add-noticia.component.html',
  styleUrls: ['./add-noticia.component.scss']
})
export class AddNoticiaComponent implements OnInit {

  /**
   * @property
   */
  categories = ['Novetats', 'Actualitzacions', 'Events', 'Comunitat', 'Botiga', 'Altres'];

  /**
   * @property
   */
  text1 = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  text2 = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  titol = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  resum = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  categoria = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  imatgePortada = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  imatgeMitg = new FormControl('', [Validators.required]);

  /**
   * @property
   */
  @ViewChild('Afegit') private afegitModal: SwalComponent;

  /**
   * @param httpClient
   * @param uploadService
   * @param publicService
   * @param router
   */
  constructor(private httpClient: HttpClient, private uploadService: UploadService, private publicService: PublicService,
              private router: Router) { }

  /**
   * Funció que s'inicialitza quan s'entra a la pàgina d'afegir una noticia
   */
  ngOnInit() {
    if (this.publicService.getIsAdmin() == "false") {
        this.router.navigate(['/home']);
    }
  }

  /**
   * Funció que fa que es mostri un missatge d'error quan hi ha un error en algun camp
   * del formulari
   */
  getErrorMessageText(){
    return this.text1.hasError('required') ? "'Has d'omplir el camp'" :
    '';
  }

  /**
   * Funció que fa que es canvii el valor del camp del formulari en qüestió.
   * @param event 
   */
  getImatgePortada(event: any){
    this.imatgePortada.patchValue(event.target.files[0].name);
  }

  /**
   * Funció que fa que es canvii el valor del camp del formulari en qüestió.
   * @param event 
   */
  getImatgeMitg(event: any){
    this.imatgeMitg.patchValue(event.target.files[0].name);
  }

  /**
   * Funció que fa s'afegeixi una noticia nova a la BD
   */
  addNew(){
    if(this.categoria.value == "Novetats"){
      this.categoria.patchValue("Novedades");
    }
    else if(this.categoria.value == "Actualitzacions"){
      this.categoria.patchValue("Actualizaciones");
    }
    else if(this.categoria.value == "Events"){
      this.categoria.patchValue("Eventos");
    }
    else if(this.categoria.value == "Comunitat"){
      this.categoria.patchValue("Comunidad");
    }
    else if(this.categoria.value == "Botiga"){
      this.categoria.patchValue("Tienda");
    }
    else if(this.categoria.value == "Altres"){
      this.categoria.patchValue("Otros");
    }
    this.uploadService.uploadNoticia(this.text1.value, this.text2.value, this.categoria.value, this.titol.value,
    this.resum.value, this.imatgePortada.value, this.imatgeMitg.value);
    this.afegitModal.show();
  }

}
