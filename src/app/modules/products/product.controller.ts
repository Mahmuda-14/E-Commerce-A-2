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
      message: 'Products fetched successfully!',
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




export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct
};
