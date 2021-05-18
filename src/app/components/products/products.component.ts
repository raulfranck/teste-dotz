import { Component, OnInit } from '@angular/core';
import { ProductModelServer } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';
import { isObject } from 'util';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: ProductModelServer[] = [];

  constructor(
    private productsService: ProductsService,
    private userService: UserService,
    ) { }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((prods:  ProductModelServer[]) => {
      this.products = prods;
      console.log(this.userService.dataUser)
    })
  }

  addToCart(id) {
    if(this.userService.dataUser.id > 0) {
      this.productsService.getOneProduct(id)
      window.alert('Adicionado ao carrinho')
    } else {
      window.alert('Efetue seu login para poder comprar')
    }

  }

}
