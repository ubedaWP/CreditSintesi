import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  //Rutes Logos Footer
  angularLogoRoute: string = "../../../assets/logos/angularLogo.png";
  laravelLogoRoute: string = "../../../assets/logos/laravelLogo.png";
  mdbootstrapLogoRoute: string = "../../../assets/logos/mdbootstrapLogo.png";

  isAdmin: boolean;

  constructor(private publicService: PublicService) { }

  ngOnInit() {
    this.setIsOn();
    console.log(this.isAdmin);
  }

  setIsOn(){
    if(this.getIsOn() == "false"){
      this.isAdmin = false;
    }
    else if(this.getIsOn() == "true"){
      this.isAdmin = true;
    }
  }

  getIsOn(){
    return this.publicService.getIsOn();
  }


}
