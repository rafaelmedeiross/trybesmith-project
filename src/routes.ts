import { Router } from 'express';
import ProductController from './controllers/product.controller';
import UserController from './controllers/user.controller';
import OrderController from './controllers/order.controller';

const router = Router();

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();
router.post('/products', productController.postProduct);
router.get('/products', productController.getAllProducts);
router.post('/users', userController.postUser);
router.get('/orders', orderController.getAllOrders);

export default router;