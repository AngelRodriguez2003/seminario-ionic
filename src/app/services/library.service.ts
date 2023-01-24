import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }

  async getAuthors() {
    const response = await fetch("https://reqres.in/api/users?page=2");
    return await response.json();
  }
}
