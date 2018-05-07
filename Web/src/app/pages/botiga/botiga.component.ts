import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data-service.service';
import { GetsService } from '../../services/gets.service';
import { FormControl, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-botiga',
  templateUrl: './botiga.component.html',
  styleUrls: ['./botiga.component.scss']
})
export class BotigaComponent implements OnInit {

  public lastProducts = [];
  public digitalProducts;
  public fisicalProducts;
  public tags;
  public digitalTag : boolean = false;
  public fisicalTag : boolean = false;
  public tagList = new FormControl();

  @ViewChild('searchFilter') private searchFilter;
  

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

  getSearchFisics(words){
    this.getService.getSearchFilterFisics(words).subscribe(
      data=>{
        this.fisicalProducts = data;
      },
      error=>{
        
      }
    )
  }

  getSearchDigitals(words){
    this.getService.getSearchFilterDigitals(words).subscribe(
      data=>{
        this.digitalProducts = data;
      },
      error=>{
        
      }
    )
  }

  getProductsSearchFilter(event){
    // this.searchFilter.nativeElement.value = "";
    let words = event.target.value;
    this.getSearchFisics(words);
    this.getSearchDigitals(words);
  }

  checkTagDigital(event){
    this.digitalTag = event.checked;
  }

  checkTagFisic(event){
    this.fisicalTag = event.checked;
  }

  filterByTag(){
    if(this.fisicalTag == true && this.digitalTag == false){
      console.log("el filtre de fisical esta activat i l'altre no");
    }
    else if(this.fisicalTag == false && this.digitalTag == true){
      console.log("el filtre de digital esta activat i l'altre no");
    }
    else{
      console.log("Els 2 filtres estan activats o no activats");
    }
  }

}
