import { Component, OnInit } from '@angular/core';
import { ProductModelServer } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart: any[] = new Array
  public total: number = 0
  public priceInt: number = 0
  constructor(
    private productsToCart: ProductsService,
    private userService: UserService,
    ) {

    }


    ngOnInit() {
      this.cart.push(this.productsToCart.productsToCart)
      this.cart[0].map(res => {

      this.cart[0].map(res => {
          this.total = (parseInt(res.price) + this.total)
          this.priceInt = this.total/2

        })
        /* this.total + this.cart[0].price */
      })
    }

    buy() {
      if(this.userService.dataUser.dotz > this.priceInt) {
        this.userService.putPurchase(this.cart[0]).subscribe(res => {
          console.log(res)
        })

        this.userService.putSald(this.priceInt)
      } else {
        window.alert('Você não possui saldo suficiente')
      }


    }


}
