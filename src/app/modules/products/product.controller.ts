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
    console.log(searchTerm);

 
    const result = await ProductServices.getSearchProductFromDB(searchTerm);

    console.log(`Search result: ${JSON.stringify(result)}`); // Debugging line

    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
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

// const singleUpdate = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params; // Extract ID from request parameters
//     const updateData = req.body; // Extract update data from request body

//     const result = await ProductServices.singleProductUpdate(id, updateData);

// if (result.success) {
//   res.status(200).json({
//     success: true,
//     message: result.message,
//     data: result.data,
//   });
//     } else {
//       res.status(404).json({
//         success: false,
//         message: result.message,
//         data: result.data,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: 'An error occurred while updating the product.',
//       error: err,
//     });
//   }
// };

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  getSearchProduct,
  getDelete,
};
