import { Component, OnInit } from '@angular/core';
import { GetsService } from '../../services/gets.service';

@Component({
  selector: 'app-noticies',
  templateUrl: './noticies.component.html',
  styleUrls: ['./noticies.component.scss']
})
export class NoticiesComponent implements OnInit {

  constructor(private getService: GetsService) { }

  public noticies = [];
  ngOnInit() {
    
  }


}
