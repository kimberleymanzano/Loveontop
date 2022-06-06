import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  API_URL="http://localhost:3000/api/product";

  products: Product[] | undefined;
  cart_items: Product[] | undefined;

  constructor(private http:HttpClient) {
    this.cart_items=[];
   }

  getProducts(){
    return this.http.get<Product[]>(this.API_URL);
  }

  addtocart(item: Product) {
    this.cart_items?.push(item);
    console.log(this.cart_items);
  }

}
