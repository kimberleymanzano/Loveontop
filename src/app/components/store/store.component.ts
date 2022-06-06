import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

import * as M from 'materialize-css';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

  constructor(public productservice: ProductsService) { }

  ngOnInit(): void {
    //console.log(this.productservice.getProducts());

    this.getProducts();

    var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, {});
  
  }

  getProducts(){
    this.productservice.getProducts().subscribe(
      res => {
        this.productservice.products = res;
        console.log(this.productservice.products);
      },
      err => {
        console.log(err);
      }
    )
  }

}
