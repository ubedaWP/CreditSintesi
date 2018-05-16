import { Component, OnInit } from '@angular/core';
import { GetsService } from '../../services/gets.service';


@Component({
  selector: 'app-noticies',
  templateUrl: './noticies.component.html',
  styleUrls: ['./noticies.component.scss']
})
export class NoticiesComponent implements OnInit {

  constructor(private getService: GetsService) { 
  }

  public news;

  public buttonNovetats;
  public buttonActualitzacions;
  public buttonEvents;
  public buttonComunitat;
  public buttonBotiga;
  public buttonAltres

  ngOnInit() {
    this.getNovetats();
    this.setButtonClassesInit();
  }

  setButtonClassesInit(){
    this.buttonNovetats = 'btn btn-outline-brown waves-light';
    this.buttonActualitzacions = 'btn btn-brown waves-light';
    this.buttonEvents = 'btn btn-brown waves-light';
    this.buttonComunitat = 'btn btn-brown waves-light';
    this.buttonBotiga = 'btn btn-brown waves-light';
    this.buttonAltres = 'btn btn-brown waves-light';
  }

  getNovetats(){
    this.getService.getNoticies('Novedades').subscribe(
      data=>{
        this.news = data;
        console.log(this.news);
      },
      error=>{
        console.log(error);
      }
    )
    this.buttonNovetats = 'btn btn-outline-brown waves-light';
    this.buttonActualitzacions = 'btn btn-brown waves-light';
    this.buttonEvents = 'btn btn-brown waves-light';
    this.buttonComunitat = 'btn btn-brown waves-light';
    this.buttonBotiga = 'btn btn-brown waves-light';
    this.buttonAltres = 'btn btn-brown waves-light';
  }

  getActualitzacions(){
    this.getService.getNoticies('Actualizaciones').subscribe(
      data=>{
        this.news = data;
        console.log(this.news);
      },
      error=>{
        console.log(error);
      }
    )
    this.buttonNovetats = 'btn btn-brown waves-light';
    this.buttonActualitzacions = 'btn btn-outline-brown waves-light';
    this.buttonEvents = 'btn btn-brown waves-light';
    this.buttonComunitat = 'btn btn-brown waves-light';
    this.buttonBotiga = 'btn btn-brown waves-light';
    this.buttonAltres = 'btn btn-brown waves-light';
  }

  getEvents(){
    this.getService.getNoticies('Eventos').subscribe(
      data=>{
        this.news = data;
        console.log(this.news);
      },
      error=>{
        console.log(error);
      }
    )
    this.buttonNovetats = 'btn btn-brown waves-light';
    this.buttonActualitzacions = 'btn btn-brown waves-light';
    this.buttonEvents = 'btn btn-outline-brown waves-light';
    this.buttonComunitat = 'btn btn-brown waves-light';
    this.buttonBotiga = 'btn btn-brown waves-light';
    this.buttonAltres = 'btn btn-brown waves-light';
  }

  getComunitat(){
    this.getService.getNoticies('Comunidad').subscribe(
      data=>{
        this.news = data;
        console.log(this.news);
      },
      error=>{
        console.log(error);
      }
    )
    this.buttonNovetats = 'btn btn-brown waves-light';
    this.buttonActualitzacions = 'btn btn-brown waves-light';
    this.buttonEvents = 'btn btn-brown waves-light';
    this.buttonComunitat = 'btn btn-outline-brown waves-light';
    this.buttonBotiga = 'btn btn-brown waves-light';
    this.buttonAltres = 'btn btn-brown waves-light';
  }

  getBotiga(){
    this.getService.getNoticies('Tienda').subscribe(
      data=>{
        this.news = data;
        console.log(this.news);
      },
      error=>{
        console.log(error);
      }
    )
    this.buttonNovetats = 'btn btn-brown waves-light';
    this.buttonActualitzacions = 'btn btn-brown waves-light';
    this.buttonEvents = 'btn btn-brown waves-light';
    this.buttonComunitat = 'btn btn-brown waves-light';
    this.buttonBotiga = 'btn btn-outline-brown waves-light';
    this.buttonAltres = 'btn btn-brown waves-light';
  }

  getAltres(){
    this.getService.getNoticies('Otros').subscribe(
      data=>{
        this.news = data;
        console.log(this.news);
      },
      error=>{
        console.log(error);
      }
    )
    this.buttonNovetats = 'btn btn-brown waves-light';
    this.buttonActualitzacions = 'btn btn-brown waves-light';
    this.buttonEvents = 'btn btn-brown waves-light';
    this.buttonComunitat = 'btn btn-brown waves-light';
    this.buttonBotiga = 'btn btn-brown waves-light';
    this.buttonAltres = 'btn btn-outline-brown waves-light';
  }

}
