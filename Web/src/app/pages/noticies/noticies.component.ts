/**
 * @author David Ubeda
 */
import { Component, OnInit } from '@angular/core';
import { GetsService } from '../../services/gets.service';


@Component({
  selector: 'app-noticies',
  templateUrl: './noticies.component.html',
  styleUrls: ['./noticies.component.scss']
})
export class NoticiesComponent implements OnInit {

  /**
   * 
   * @param getService 
   */
  constructor(private getService: GetsService) { 
  }

  /**
   * @property
   */
  public news;

  /**
   * @property
   */
  public buttonNovetats;

  /**
   * @property
   */
  public buttonActualitzacions;

  /**
   * @property
   */
  public buttonEvents;

  /**
   * @property
   */
  public buttonComunitat;

  /**
   * @property
   */
  public buttonBotiga;

  /**
   * @property
   */
  public buttonAltres;

  /**
   * Funció que s'inicialitza al entrar a la pàgina de noticies
   */
  ngOnInit() {
    this.getNovetats();
    this.setButtonClassesInit();
  }

  /**
   * Funció que dona les classes alsd diferents botons de l'html.
   */
  setButtonClassesInit(){
    this.buttonNovetats = 'btn btn-outline-brown waves-light';
    this.buttonActualitzacions = 'btn btn-brown waves-light';
    this.buttonEvents = 'btn btn-brown waves-light';
    this.buttonComunitat = 'btn btn-brown waves-light';
    this.buttonBotiga = 'btn btn-brown waves-light';
    this.buttonAltres = 'btn btn-brown waves-light';
  }

  /**
   * Funció que agafa les noticies amb categoria Novetats i canvia les classes dels 
   * diferents botons de l'html.
   */
  getNovetats(){
    this.getService.getNoticies('Novedades').subscribe(
      data=>{
        this.news = data;
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

  /**
   * Funció que agafa les noticies amb categoria Actualitzacions i canvia les classes dels 
   * diferents botons de l'html.
   */
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

  /**
   * Funció que agafa les noticies amb categoria Events i canvia les classes dels 
   * diferents botons de l'html.
   */
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

  /**
   * Funció que agafa les noticies amb categoria Comunitat i canvia les classes dels 
   * diferents botons de l'html.
   */
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

  /**
   * Funció que agafa les noticies amb categoria Botiga i canvia les classes dels 
   * diferents botons de l'html.
   */
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

  /**
   * Funció que agafa les noticies amb categoria Altres i canvia les classes dels 
   * diferents botons de l'html.
   */
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
