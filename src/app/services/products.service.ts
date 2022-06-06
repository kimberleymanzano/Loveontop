import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  API_URL="http://localhost:3000/api/product";

  products: Product[] = [];
  cart_items: Product[] = [];

  constructor(private http:HttpClient) {
    this.cart_items=[];
   }

  getProducts(){
    return this.http.get<Product[]>(this.API_URL);
  }

  getCart(){
    return this.cart_items = JSON.parse(localStorage.getItem('products') || '{}') ;
  }

  addtocart(item: Product) {
    item.qty=1;

    if(localStorage.getItem('products')==null){
      this.cart_items?.push(item);
      localStorage.setItem('products',JSON.stringify(this.cart_items));  

    }else if(this.isDuplicated(item.id)) {
      this.cart_items = JSON.parse(localStorage.getItem('products') || '{}')
      this.cart_items[this.isDuplicatedID(item.id)].qty++;
      localStorage.setItem('products',JSON.stringify(this.cart_items)); 
  
    } else {
      this.cart_items?.push(item);
      localStorage.setItem('products',JSON.stringify(this.cart_items)); 
    }
    console.log(this.cart_items)
  }


  isDuplicated(id:any){
    for(var i=0;i<this.cart_items.length-1;i++){
      if(id==this.cart_items[i].id){
        return true;
      }
    }
    return false;
  }

  isDuplicatedID(id:any){
    for(var i=0;i<this.cart_items.length-1;i++){
      if(id==this.cart_items[i].id){
        return i;
      }
    }
    return 0;
  }


}
