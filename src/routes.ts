import { Router } from 'express';
import ProductController from './controllers/product.controller';
import UserController from './controllers/user.controller';
import OrderController from './controllers/order.controller';
import LoginController from './controllers/login.controller';
import verifier from './middlewares/login.middleware';
import { nameVerifier, amountVerifier } from './middlewares/user.middleware';
import { 
  usernameVerifier, 
  vocationVerifier, 
  levelVerifier, 
  passwordVerifier } from './middlewares/product.middleware';

const router = Router();

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();
const loginController = new LoginController();
router.post('/products', nameVerifier, amountVerifier, productController.postProduct);
router.get('/products', productController.getAllProducts);
router.post(
  '/users', 
  usernameVerifier, 
  vocationVerifier, 
  levelVerifier, 
  passwordVerifier,
  userController.postUser,
);
router.get('/orders', orderController.getAllOrders);
router.post('/login', verifier, loginController.loginUser);
export default router;