import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  author: any;
  booksAuthor: any;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private libraryService: LibraryService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author");
    this.libraryService.getBooksAuthor(this.author?.id).then(res => {
      this.booksAuthor = res;
      console.log("info libro:",this.booksAuthor);
      
    })

  }

  closeModal() {
    this.modalController.dismiss();
  }
}
