import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAllOrders = async (re:Request, res: Response) => {
    const allOrders = await this.orderService.getAllOrders();
    res.status(200).json(allOrders);
  };

  public postOrder = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const { id } = req.body.loggedUser;
    console.log(id);
    const feedback = await this.orderService.postOrder(productsIds, id);
    res.status(201).json(feedback);
  };
}

export default OrderController;