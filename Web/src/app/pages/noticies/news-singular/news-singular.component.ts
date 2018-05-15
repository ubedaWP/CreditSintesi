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

  idNoticia;
  newsData;
  titol;
  text1;
  text2;
  imatgePortada;
  imatgeMitg;

  constructor(private router: Router, private _router: ActivatedRoute, private getService: GetsService,
  private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.setIDNoticia();
    this.getNewsData();
  }

  setIDNoticia(){
    this.idNoticia = this._router.snapshot.params.id;
  }

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
