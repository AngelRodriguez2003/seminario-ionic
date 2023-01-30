import { Component, OnInit } from '@angular/core';
import { IonItem } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {
  topBooks: any
  constructor(
    private libraryService: LibraryService,
  ) { }
  slideOpt = {
    initialSlide: 0,
    slidePerView: 1,
    speed: 400,
    direction: 'vertical',

  }
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.topBooks = this.libraryService.getTopBooks().then(res => {
      this.topBooks = res.slice(0, 10).map((item: any, index: any) => {
        return { ...item, position: index + 1 }
      });

      console.log(this.topBooks);
    });
  }

}
