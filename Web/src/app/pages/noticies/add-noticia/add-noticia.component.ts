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

  categories = ['Novetats', 'Actualitzacions', 'Events', 'Comunitat', 'Botiga', 'Altres'];
  text1 = new FormControl('', [Validators.required]);
  text2 = new FormControl('', [Validators.required]);
  titol = new FormControl('', [Validators.required]);
  resum = new FormControl('', [Validators.required]);
  categoria = new FormControl('', [Validators.required]);
  imatgePortada = new FormControl('', [Validators.required]);
  imatgeMitg = new FormControl('', [Validators.required]);

  @ViewChild('Afegit') private afegitModal: SwalComponent;

  constructor(private httpClient: HttpClient, private uploadService: UploadService, private publicService: PublicService,
              private router: Router) { }

  ngOnInit() {
    if (this.publicService.getIsAdmin() == "false") {
        this.router.navigate(['/home']);
    }
  }

  getErrorMessageText(){
    return this.text1.hasError('required') ? "'Has d'omplir el camp'" :
    '';
  }

  getImatgePortada(event){
    this.imatgePortada.patchValue(event.target.files[0].name);
  }

  getImatgeMitg(event){
    this.imatgeMitg.patchValue(event.target.files[0].name);
  }

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
