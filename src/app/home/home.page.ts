import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BooksModalPage } from '../books-modal/books-modal.page';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authors: any;
  booksOff: any;
  slideOps = {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 400
  }
  constructor(private libraryService: LibraryService, private modalController: ModalController) { }

  ionViewDidEnter() {
    this.libraryService.getAuthors().then(res => {
      this.authors = res;
      console.log(this.authors)
    })

    this.booksOff = this.libraryService.getBooksOffline();
    console.log(this.booksOff);

  }

  async showBooks(author: any) {
    let book_list: any;
    const modal = await this.modalController.create({
      component: BooksModalPage,
      componentProps: {

        author: author
      }
    });
    return await modal.present();
  }

}
