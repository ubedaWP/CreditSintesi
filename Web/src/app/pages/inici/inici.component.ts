/**
 * @author Guillem Vidal
 */
import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { GetsService } from '../../services/gets.service'

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.scss']
})
export class IniciComponent implements OnInit {

  /**
   * 
   * @param router 
   * @param getsService 
   */
  constructor(private router: Router, private getsService: GetsService) { }

  /**
   * @property
   */
  public latestNews;

  /**
   * Funció que s'inicialitza quan s'entra en la pàgina inicial
   */
  ngOnInit() {
    this.getLatestNews();
  }

  /**
   * Funció que agafa la informació de les 4 últimes noticies
   */
  getLatestNews(){
    this.getsService.getLatestNews().subscribe(
      data=>{
        this.latestNews=data;
        console.log("noticies",data);
      },
      error=>{
        console.log("Error",error);
      }

    )
  }

}
