

import { Order } from "./order.interface";
import { OrderModel } from "./order.model";



const createOrderIntoDB = async (orderData: Order) => {
  const result = await OrderModel.create(orderData);
  return result;
};

const getAllOrderFromDB = async () => {
    const result = await OrderModel.find();
    return result;
  };

export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB
  
};