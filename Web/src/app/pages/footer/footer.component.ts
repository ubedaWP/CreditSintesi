/**
 * @author David Ubeda
 */
import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  /**
   * @property
   */
  public angularLogoRoute: string = "../../../assets/logos/angularLogo.png";

  /**
   * @property
   */
  public laravelLogoRoute: string = "../../../assets/logos/laravelLogo.png";

  /**
   * @property
   */
  public mdbootstrapLogoRoute: string = "../../../assets/logos/mdbootstrapLogo.png";

  /**
   * @property
   */
  public isOn: boolean;

  /**
   * 
   * @param publicService 
   */
  constructor(private publicService: PublicService) { }

  /**
   * Funció que s'inicialitza amb el footer de la pàgina.
   */
  ngOnInit() {
    this.setIsOn();
    console.log(this.isOn);
  }

  /**
   * Funció que determina si hi ha algú loguejat
   */
  setIsOn(){
    if(this.getIsOn() == "false"){
      this.isOn = false;
    }
    else if(this.getIsOn() == "true"){
      this.isOn = true;
    }
  }

  /**
   * Funció que mira si hi ha algú loguejat
   */
  getIsOn(): string{
    return this.publicService.getIsOn();
  }


}
