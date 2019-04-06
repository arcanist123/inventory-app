import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products-list-component',
  templateUrl: './products-list-component.component.html',
  styleUrls: ['./products-list-component.component.css']
})
export class ProductsListComponentComponent {
  @Input() productList: Product[];

  @Output() ProductSelected: EventEmitter<Product>;

  constructor() {
  }


}
