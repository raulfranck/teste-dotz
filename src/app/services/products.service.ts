import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductModelServer } from '../model/product.model';
/* import { Router } from '@angular/router'; */

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URL_SERVER = environment.server

  public productsToCart: ProductModelServer[] = []

  constructor(
    private http: HttpClient,
    /* private router: Router */
    ) { }

  public getAllProducts(): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.URL_SERVER + '/products')
  }

  public getOneProduct(id) {
    /* Buscar item pelo id */
      this.http.get<ProductModelServer[]>(this.URL_SERVER + '/products').subscribe((res: ProductModelServer[]) => {
        var productRes = res.find(prod => prod.id === id)
        return this.productsToCart.push(productRes)
      })
  }
}
