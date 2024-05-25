import { Request, Response } from 'express';
import { OrderServices } from './order.service';



const createOrder = async (req: Request, res: Response) => {
  const { order: orderData } = req.body;

  const result = await OrderServices.createOrderIntoDB(orderData);

  console.log(result);

  res.status(200).json({
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
};



const getAllOrder = async (req: Request, res: Response) => {
  const result = await OrderServices.getAllOrderFromDB();

  console.log(result);

  res.status(200).json({
    success: true,
    message: 'Order fetched successfully!',
    data: result,
  });
};




export const OrderControllers = {
  createOrder,
  getAllOrder,
};
