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
}

export default OrderService;
