import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  products;
  model: ProductRepository;
  selectedProduct: string | undefined = "Deneme";
  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();

    
  }

  
}


