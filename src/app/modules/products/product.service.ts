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

const getSearchProductFromDB = async (searchTerm: any) => {

  const query = {
    name: { $regex: searchTerm, $options: 'i' },
  };
// console.log(query);
  const products = await ProductModel.find(query);
  return products;
};

const deleteProduct = async (id: string) => {
  const result = await ProductModel.deleteOne({ id });
  return result;
};

// const singleProductUpdate = async (id: string, updateData: any) => {
//   const result = await ProductModel.findOneAndUpdate(
//     { _id: id },
//     { $set: updateData },
//     { new: true }
//   );

//   if (result) {
//     return {
//       success: true,
//       message: 'Product updated successfully!',
//       data: result
//     };
//   } else {
//     return {
//       success: false,
//       message: 'Product not found!',
//       data: null
//     };
//   }
// };

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  getSearchProductFromDB,
  deleteProduct,
};
