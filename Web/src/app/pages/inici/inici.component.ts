import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { GetsService } from '../../services/gets.service'

@Component({
  selector: 'app-inici',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.scss']
})
export class IniciComponent implements OnInit {

  constructor(private router: Router, private getsService: GetsService) { }

  public latestNews;

  ngOnInit() {
    this.getLatestNews();
  }
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
