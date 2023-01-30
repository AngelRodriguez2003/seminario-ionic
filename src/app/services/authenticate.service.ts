import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  urlServer = "https://librarypca.fly.dev/";
  httpHeaders = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

  constructor(private storage: Storage, private http: HttpClient) { }
  async loginUserLocal(credentials: any) {
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

  registerUserLocal(userData: any) {
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
  loginUser(credentials: any) {
    return new Promise((accept, reject) => {
      let params = {
        "user": credentials
      }
      this.http.post(`${this.urlServer}login`, params, this.httpHeaders).subscribe((data: any) => {
        if (data.status == "OK") {
          accept(data);
        } else {
          reject(data.errors)
        }
      }, (error) => {
        reject("Error en Login")
      })
    })
  }

  registerUser(userData: any) {
    let params = {
      "user": userData
    }
    return new Promise((accept, reject) => {
      this.http.post(`${this.urlServer}signup`, params, this.httpHeaders).subscribe((data: any) => {
        if (data.status == "OK") {
          accept(data.msg);
        } else {
          reject(data.errors)
        }
      }, (error) => {
        reject("Error al intentar registrarse")
      })
    })
  }

}


