/**
 * @author David Ubeda
 */
import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {


  /**
   * @property
   */
  public images;

  /**
   * 
   * @param sanitizer 
   */
  constructor(private sanitizer: DomSanitizer) { }

  /**
   * Funció que inicialitza l'array d'imatges.
   */
  ngOnInit() {
    this.images = [
      {url: 'https://wallpaper.wiki/wp-content/uploads/2017/05/Images-Download-World-of-Warcraft-Wallpapers-HD.jpg'},
      {url: 'http://avante.biz/wp-content/uploads/World-Of-Warcraft-HD-Wallpapers/World-Of-Warcraft-HD-Wallpapers-032.jpg'},
      {url: 'http://waraqh.com/wp-content/uploads/2018/04/world-of-warcraft-backgrounds-wallpaper-hd-images-for-iphone-background.jpg'},
      {url: 'https://www.excalibur.cz/wp-content/uploads/2016/11/wow-legion-hotfix-1920x1080.jpg'},
      {url: 'https://i.pinimg.com/originals/e9/b7/5b/e9b75b420371d29af67516648a0ced31.jpg'},
      {url: 'http://qimplink.com/wp-content/uploads/2017/12/Wallpaper-Hd-For-World-Of-Warcraft-Full-Pics-Desktop.jpg'},
      {url: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/1405434033360356524.jpg'},
      {url: 'https://www.hdwallpaper.nu/wp-content/uploads/2016/02/World_Warcraft_Legion_wallpaper_18.png'},
      {url: 'https://elchapuzasinformatico.com/wp-content/uploads/2018/01/World-of-Warcraft-Battle-for-Azeroth.jpg'},
      {url: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/4AZA9DK8WTBS1517347770194.jpg'},
      {url: 'https://bnetcmsus-a.akamaihd.net/cms/gallery/PUAP4WG96Y6N1517347586246.jpg'},
      {url: 'https://images3.alphacoders.com/159/159225.jpg'},
    ]
  }
  

}
