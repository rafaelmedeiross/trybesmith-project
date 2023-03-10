import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async postProduct(product: Product): Promise<Product> {
    const postedProduct = await this.model.postProduct(product);
    return postedProduct;
  }

  public async getAllProducts(): Promise<Product[]> {
    const allProducts = await this.model.getAllProducts();
    return allProducts;
  }
}

export default ProductService;
