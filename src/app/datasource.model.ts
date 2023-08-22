import { Product } from "./product.model";

export class SimpleDataSource {
    private products: Product[];

    constructor(){
        this.products = new Array<Product>(
            new Product(1, "Product 1", "Description 1", "1.jpg", 10),
            new Product(2, "Product 2", "Description 2", "2.jpg", 20),
            new Product(3, "Product 3", "Description 3", "3.jpg", 30),
            new Product(4, "Product 4", "Description 4", "4.jpg", 40)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
   
}