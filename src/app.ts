import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import { ProductRoutes } from './app/modules/products/product.routes';
import { OrderRoutes } from './app/modules/orders/order.router';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/', ProductRoutes);
app.use('/', OrderRoutes);


app.get('/', (req: Request, res: Response) =>{
  res.send('server is running');
});



export default app;
