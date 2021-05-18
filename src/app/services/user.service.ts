import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { User, Cart  } from '../model/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL_SERVER = environment.server

  public checkUserLogged: boolean = false;
  public dataUser: any = [];
  public total: number = 0;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  createUser(request: User) {
    return this.http.post<User>(this.URL_SERVER + '/users', request)
  }

  checkLogin(dataLogin) {
    this.http.get(this.URL_SERVER + '/users').subscribe((res: User[]) => {
      var test = res.find(user => user.email === dataLogin.email)
      if(test.email === dataLogin.email && test.password === dataLogin.password) {
        this.dataUser = test
        this.router.navigate(['/'])
      } else {
        if (dataLogin.email === '' && dataLogin.password === '') {
          window.alert('Digite seus dados')
        }
        this.router.navigate(['/register'])
        window.alert('Usuário não existe')
      }
    })

  }

  putPurchase(itens: Cart) {
     return this.http.post<Cart>(this.URL_SERVER + '/users' + '/' + this.dataUser.id + '/cart', itens)
  }

  putSald (priceInt) {
    var sald = this.dataUser.dotz - priceInt
    return this.http.put(this.URL_SERVER + '/users', sald)
  }
}
