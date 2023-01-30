import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-author-detail-modal',
  templateUrl: './author-detail-modal.page.html',
  styleUrls: ['./author-detail-modal.page.scss'],
})
export class AuthorDetailModalPage implements OnInit {
  author: any
  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private libraryService: LibraryService
  ) { }

  ngOnInit() {
    this.author = this.navParams.get("author");
    console.log("pito flauta", this.author);

  }
  closeModal() {
    this.modalController.dismiss();
  }


}
