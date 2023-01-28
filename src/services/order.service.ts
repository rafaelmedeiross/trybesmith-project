import connection from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<Order[]> {
    const allOrders = await this.model.getAllOrders();
    return allOrders;
  }

  public async postOrder(productsIds: number[], id: number): 
  Promise< { userId?: number, productsIds?: number[] } > {
    await this.model.postOrder(productsIds, id);
    return { userId: id, productsIds };
  }
}

export default OrderService;
