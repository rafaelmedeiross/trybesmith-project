import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async postProduct(product: Product): Promise<Product> {
    console.log('modelproduct');
    const { name, amount } = product;
    console.log(name, amount);
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    const id = insertId;
    console.log(id, name, amount);
    return { id, name, amount };
  }

  public async getAllProducts(): Promise<Product[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    const [rows] = result;
    return rows as Product[];
  }
}