import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data-service.service';
import { GetsService } from '../../services/gets.service';

@Component({
  selector: 'app-botiga',
  templateUrl: './botiga.component.html',
  styleUrls: ['./botiga.component.scss']
})
export class BotigaComponent implements OnInit {

  lastProducts = [];
  digitalProducts;
  fisicalProducts;
  tags;

  constructor(private getService : GetsService){

  }

  ngOnInit(){
    this.getLastDigital();
    this.getLastFisical();
    this.getDigitalProducts();
    this.getFisicalProducts();
    this.getTags();
  }

  getLastDigital(){
    this.getService.getLastDigitalProducts().subscribe(
      data=>{
        this.lastProducts.push(data[0], data[1]);
      },
      error=>{
        console.log(error)
      }
    )
  }

  getLastFisical(){
    this.getService.getLastFisicalProducts().subscribe(
      data=>{
        this.lastProducts.push(data[0], data[1]);
      },
      error=>{
        console.log(error);
      }
    )
  }

  getFisicalProducts(){
    this.getService.getFisicalProducts().subscribe(
      data=>{
        this.fisicalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  getDigitalProducts(){
    this.getService.getDigitalProducts().subscribe(
      data=>{
        this.digitalProducts = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  getTags(){
    this.getService.getTags().subscribe(
      data=>{
        this.tags = data;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
