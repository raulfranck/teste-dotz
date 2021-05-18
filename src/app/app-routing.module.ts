import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ExtractComponent } from './components/extract/extract.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'exract', component: ExtractComponent
  },
  {
    path: 'cart', component: CartComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
