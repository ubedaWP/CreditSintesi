import { Component, OnInit } from '@angular/core';
import { GetsService } from '../../services/gets.service';

@Component({
  selector: 'app-noticies',
  templateUrl: './noticies.component.html',
  styleUrls: ['./noticies.component.scss']
})
export class NoticiesComponent implements OnInit {

  constructor(private getService: GetsService) { }

  public novetats;
  public actualitzacions;
  public events;
  public comunitat;
  public botiga;
  public altres;

  ngOnInit() {
    this.getNovetats();
    this.getActualitzacions();
    this.getEvents();
    this.getComunitat();
    this.getBotiga();
    this.getAltres();
  }

  getNovetats(){
    this.getService.getNoticies('Novedades').subscribe(
      data=>{
        this.novetats = data;
        console.log(this.novetats);
      },
      error=>{
        console.log(error);
      }
    )
  }

  getActualitzacions(){
    this.getService.getNoticies('Actualizaciones').subscribe(
      data=>{
        this.actualitzacions = data;
        console.log(this.actualitzacions);
      },
      error=>{
        console.log(error);
      }
    )
  }

  getEvents(){
    this.getService.getNoticies('Eventos').subscribe(
      data=>{
        this.events = data;
        console.log(this.events);
      },
      error=>{
        console.log(error);
      }
    )
  }

  getComunitat(){
    this.getService.getNoticies('Comunidad').subscribe(
      data=>{
        this.comunitat = data;
        console.log(this.comunitat);
      },
      error=>{
        console.log(error);
      }
    )
  }

  getBotiga(){
    this.getService.getNoticies('Tienda').subscribe(
      data=>{
        this.botiga = data;
        console.log(this.botiga);
      },
      error=>{
        console.log(error);
      }
    )
  }

  getAltres(){
    this.getService.getNoticies('Otros').subscribe(
      data=>{
        this.altres = data;
        console.log(this.altres);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
