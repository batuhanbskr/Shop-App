import { Component } from '@angular/core';
import { ProductRepository } from './repository.model';
import { Product } from './product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  model: ProductRepository = new ProductRepository();

  addProduct(){
    this.model.addPorudct(new Product(1, "Product 5", "Product",  "Product", 1234));
  }

  removeProduct(product: Product){
    this.model.removePorudct(product);
  }
  

  
  
}
