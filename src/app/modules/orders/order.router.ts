import express from 'express';

import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/api/orders', OrderControllers.createOrder);
router.get('/api/orders', OrderControllers.getSearchOrder);
router.get('/api/orders', OrderControllers.getAllOrder);



export const OrderRoutes = router;


