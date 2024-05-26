import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/api/products', ProductControllers.createProduct);
router.get('/api/products', ProductControllers.getSearchProduct);

router.get('/api/products', ProductControllers.getAllProducts);
router.put('/api/products/:productId', ProductControllers.singleUpdate);
router.get('/api/products/:productId', ProductControllers.getSingleProduct);


router.delete('/api/products/:productId',ProductControllers.getDelete)

export const ProductRoutes = router;


// kkkkk