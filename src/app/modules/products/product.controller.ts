import { Request, Response } from 'express';

import { ProductServices } from './product.service';


const createProduct = async (req: Request, res: Response) => {
  const { product: productData } = req.body;

  const result = await ProductServices.createProductIntoDB(productData);

  // console.log(result);

  res.status(200).json({
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully all!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};



const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await ProductServices.getSingleProductFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};


const getSearchProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;

    // console.log(searchTerm);

    const result = await ProductServices.getSearchProductFromDB(searchTerm);

   
    res.status(200).json({
      success: true,
      message: `Products matching search term  '${searchTerm}' fetched successfully!`,
      data: result,
    });
  } catch (err) {
    console.log(err);
    
  }
};





const getDelete = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await ProductServices.deleteProduct(studentId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err) {
    console.log(err);
  }
};




const singleUpdate = async (req: Request, res: Response) => {
  try {
    const {id: _id} = req.params;
    
    const updateData = req.body;

    const result = await ProductServices.singleProductUpdate(_id, updateData);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
  })} 
  
  catch (err) {
    console.error(err);
  }
};






export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  singleUpdate,
  getSearchProduct,
  getDelete,
};
