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






const getSearchOrder = async (req: Request, res: Response) => {
  try {
   
    const searchTerm= req.query?.email 
    // console.log(searchTerm);

 
    const result = await OrderServices.getSearchOrderFromDB(searchTerm);

    

    res.status(200).json({
      success: true,
      message: `Products matching search term  fetched successfully!`,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while searching for products.',
      data: null,
    });
  }
};








export const OrderControllers = {
  createOrder,
  getAllOrder,
  getSearchOrder
};
