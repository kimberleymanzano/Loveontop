import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  API_URL="http://localhost:3000/api/product";

  products: Product[] | undefined;

  constructor(private http:HttpClient) { }

  getProducts(){
    //return this.http.get(this.API_URL);
    return this.http.get<Product[]>(this.API_URL);
  }
}
