import { Router } from 'express';
import ProductController from './controllers/product.controller';
import UserController from './controllers/user.controller';

const router = Router();

const productController = new ProductController();
const userController = new UserController();
router.post('/products', productController.postProduct);
router.get('/products', productController.getAllProducts);
router.post('/users', userController.postUser);

export default router;