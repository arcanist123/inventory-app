import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  @Output() productSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.productSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }


  clicked(product: Product) {
    this.currentProduct = product;
    this.productSelected.emit(product);

  }
}
