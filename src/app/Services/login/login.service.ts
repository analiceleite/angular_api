import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }

  private _http = inject(HttpClient)

  con = 'https://dummyjson.com/auth/login'

  login(username: string, password: string) {
    return this._http.post(this.con, {
      username: username,
      password: password,
      // O pipe serve para dizer: quero modificar a resposta que tenho para receber. Sem ele retorna todos os dados.
    }).pipe(map((res: any) => {
      return {
        email: res.email,
        firstName: res.firstName,
        lastName: res.lastName,
        image: res.image,
      };
    }))
  }
}
