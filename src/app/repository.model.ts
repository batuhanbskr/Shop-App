import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository {
    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = Array<Product>();
        this.dataSource.getProducts().forEach(p => this.products.push(p));
    }

    getProducts(): Product[] {
        return this.products;
    }
    
    getProductsById(id: number): Product  | undefined {
        return this.products.find(p => p.id === id);
    }

    getProductCount():number | undefined {
        return this.products.length;
    }

    addPorudct(product: Product) {
        this.products.push(product);
    }

    removePorudct(product: Product) {
        this.products.splice(this.products.indexOf(product), 1);
    }
}   