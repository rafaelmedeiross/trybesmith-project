import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public postProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const postedProduct = await this.productService.postProduct(product);
    res.status(201).json(postedProduct);
  };

  public getAllProducts = async (re:Request, res: Response) => {
    const allProducts = await this.productService.getAllProducts();
    res.status(200).json(allProducts);
  };
}

export default ProductController;