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






const getSearchProductFromDB = async (searchTerm: string) => {
  const query = {
    name: { $regex: searchTerm, $options: 'i' },
  };
  // console.log(query);
  const products = await ProductModel.find(query);
  return products;
};








const deleteProduct = async (id: string) => {
  // console.log("deleted",id);
  const result = await ProductModel.deleteOne({ id });
  // console.log(result);
  return result;
};









const singleProductUpdate = async (id: string, Data: Product) => {
  // console.log('update id', id);
  const result = await ProductModel.findByIdAndUpdate(
    id,

    {
      $set: {
        name: Data?.name,
        description: Data?.description,
        price: Data?.price,
        category: Data?.category,
        tags: Data?.tags,
        variants: Data?.variants,
        inventory: Data?.inventory,
      },
    },
    { upsert: true },
   
  );
  // console.log('Update result:', result);
  return result;

  
};





export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  singleProductUpdate,
  getSearchProductFromDB,
  deleteProduct,
};
