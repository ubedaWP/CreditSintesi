/**
 * @author David Ubeda
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetsService } from '../../../services/gets.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-news-singular',
  templateUrl: './news-singular.component.html',
  styleUrls: ['./news-singular.component.scss']
})
export class NewsSingularComponent implements OnInit {

  /**
   * @property
   */
  idNoticia;

  /**
   * @property
   */
  newsData;

  /**
   * @property
   */
  titol;

  /**
   * @property
   */
  text1;

  /**
   * @property
   */
  text2;

  /**
   * @property
   */
  imatgePortada;

  /**
   * @property
   */
  imatgeMitg;

  /**
   * 
   * @param router 
   * @param _router 
   * @param getService 
   * @param _sanitizer 
   */
  constructor(private router: Router, private _router: ActivatedRoute, private getService: GetsService,
  private _sanitizer: DomSanitizer) { }

  /**
   * Funció que s'inicialitza quan s'entra en una noticia en particular
   */
  ngOnInit() {
    this.setIDNoticia();
    this.getNewsData();
  }

  /**
   * Funció que agafa la ID de la noticia que es param per URL.
   */
  setIDNoticia(){
    this.idNoticia = this._router.snapshot.params.id;
  }

  /**
   * Funció que agafa l'informació de la noticia segons la ID en la BD
   */
  getNewsData(){
    this.getService.getNoticiaId(this.idNoticia).subscribe(
      data=>{
        this.newsData = data[0];
        this.titol = this.newsData.Titol;
        this.text1 = this.newsData.Text1;
        this.text2 = this.newsData.Text2;
        this.imatgePortada = this.newsData.ImatgePortada;
        this.imatgeMitg = this.newsData.ImatgeMitg;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
