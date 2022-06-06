import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart-object',
  templateUrl: './cart-object.component.html',
  styleUrls: ['./cart-object.component.css']
})
export class CartObjectComponent implements OnInit {
  @Input() product:any;

  constructor(public productservice:ProductsService) { }

  ngOnInit(): void {
    
  }

  addtocart(){
    this.productservice.addtocart(this.product);
  }

  removefromcart(){
    
  }

}
