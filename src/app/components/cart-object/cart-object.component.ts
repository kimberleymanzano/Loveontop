import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-object',
  templateUrl: './cart-object.component.html',
  styleUrls: ['./cart-object.component.css']
})
export class CartObjectComponent implements OnInit {
  @Input() product:any;

  constructor() { }

  ngOnInit(): void {
  }

}
