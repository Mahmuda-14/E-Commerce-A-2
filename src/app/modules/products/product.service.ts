import { Product } from './product.interface';
import { ProductModel } from './product.model';

// service

// post data
const createProductIntoDB = async (productData: Product) => {
  const result = await ProductModel.create(productData);
  return result;
};

// get data
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};



const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ id });
  return result;
};



export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB
};
