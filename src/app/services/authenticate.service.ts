import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }
  async loginUser(credentials: any) {
    let user = await this.storage.get('user')
    if (user != null) {
      user.password = atob(user.password)
    }
    return new Promise((accept, reject) => {

      if (credentials.email == user.email && credentials.password == user.password) {
        accept("Login Exitoso");
      } else {
        reject("Login Fallido");
      }
    });
  }

  registerUser(userData: any) {
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
