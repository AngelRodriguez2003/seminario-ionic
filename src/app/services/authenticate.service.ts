import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }
  async loginUser(credentials: any) {
    let user = await this.storage.get('user')

    return new Promise((accept, reject) => {
      if (user === null) {
        reject("Login Fallido");

      } else {
        user.password = atob(user.password)
        if (credentials.email == user.email && credentials.password == user.password) {
          accept("Login Exitoso");
        }
      }
    });
  }

  registerUser(userData: any) {
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
