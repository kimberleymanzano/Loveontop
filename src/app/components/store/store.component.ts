import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private productservice: ProductsService) { }

  ngOnInit(): void {
    console.log(this.productservice.getproducts());
  }

}
