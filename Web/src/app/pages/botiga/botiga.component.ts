import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data-service.service';
import { GetsService } from '../../services/gets.service';
import { FormControl, RequiredValidator } from '@angular/forms';
import { Tag } from '../../services/models/Tag';

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
  public preFisics = [];
  public preDigitals = [];

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
    this.fisicalProducts = [];
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
    this.digitalProducts = [];
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
    this.digitalTag = false;
    this.fisicalTag = false;
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
    const llistaTags = this.tagList;
    if((this.fisicalTag == true && this.digitalTag == true && llistaTags.value == null) || (this.fisicalTag == false && this.digitalTag == false && llistaTags.value == null)){
      this.getDigitalProducts();
      this.getFisicalProducts();
    }
    else if(this.fisicalTag == true && this.digitalTag == false && llistaTags.value == null){
      this.digitalProducts = [];
      this.getFisicalProducts();
    }
    else if(this.fisicalTag == false && this.digitalTag == true && llistaTags.value == null){
      this.fisicalProducts = [];
      this.getDigitalProducts();
    }
    else if(this.fisicalTag == true && this.digitalTag == false && llistaTags.value.length > 0){
      this.fisicalProducts = [];
      this.digitalProducts = [];
    }
    else if((this.fisicalTag == true && this.digitalTag == true && llistaTags.value.length > 0) || (this.fisicalTag == false && this.digitalTag == false && llistaTags.value.length > 0)) {
      this.fisicalProducts = [];
      this.digitalProducts = [];
      for (let index = 0; index < llistaTags.value.length; index++) {
        const tag = llistaTags.value[index];
        this.getService.getIdTag(tag).subscribe(
          data=>{
            const tagID = data[0].IDTag;
            this.getService.getFilterProductsFisical_Tags(tagID).subscribe(
              data=>{
                if (data[0] in this.fisicalProducts) {
                  console.log("REPE");
                }
                else{
                  this.fisicalProducts.push(data[0]);
                }
              },
              error=>{
                console.log("ERROR",error);
              }
            )
          },
          error=>{  
          },
        )
      }
      console.log(this.fisicalProducts);
    }
    else if(this.fisicalTag == false && this.digitalTag == true && llistaTags.value.length > 0){
      this.digitalProducts = [];
      this.fisicalProducts = [];
    }
    
  }
}