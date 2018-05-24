import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  images;

  constructor() {
    this.images = [
    	{"url":"https://i2-prod.mirror.co.uk/incoming/article11509896.ece/ALTERNATES/s1200/world-of-warcraft-battle-for-azeroth.png"},
    	{"url":"https://cdn.wccftech.com/wp-content/uploads/2018/01/World-of-Warcraft-Battle-for-Azeroth-preorder-free-110-character-740x416.jpg"},
    	{"url":"https://www.wog.ch/nas/screens/pc/pc_worldofwarcraftbattleforazerotha.jpg"},
    	{"url":"http://d1vr6n66ssr06c.cloudfront.net/wp-content/uploads/2018/04/WoW-Battle-for-Azeroth.jpg"},
    	{"url":"https://www.instant-gaming.com/images/products/2370/screenshot/2370-5.jpg"},
    	{"url":"https://www.instant-gaming.com/images/products/2370/screenshot/2370-4.jpg"},
    	{"url":"https://bnetcmsus-a.akamaihd.net/cms/gallery/CQKUH7BA8SZX1517346270347.jpg"},
    	{"url":"https://bnetcmsus-a.akamaihd.net/cms/gallery/M4V2VSHT7WFP1509668971084.jpg"},
    	{"url":"https://bnetcmsus-a.akamaihd.net/cms/gallery/Y63IZMLIVOK21509668970773.jpg"}
          ];
     }

  ngOnInit() {
  }

  @Input() datasource;
    selectedImage;

    setSelectedImage(image){
       this.selectedImage= image;
    }
}
