import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() data:any;
  constructor(public productservice:ProductsService) { }

  ngOnInit(): void {
  }

  addtocart(){
    console.log('yes');

    this.productservice.addtocart(this.data);
  }

}
