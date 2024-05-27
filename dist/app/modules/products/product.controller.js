"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { product: productData } = req.body;
    const result = yield product_service_1.ProductServices.createProductIntoDB(productData);
    // console.log(result);
    res.status(200).json({
        success: true,
        message: 'Product created successfully!',
        data: result,
    });
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully all!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getSearchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        // console.log(searchTerm);
        const result = yield product_service_1.ProductServices.getSearchProductFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: `Products matching search term  '${searchTerm}' fetched successfully!`,
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        yield product_service_1.ProductServices.deleteProduct(studentId);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const singleUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id: _id } = req.params;
        const updateData = req.body;
        const result = yield product_service_1.ProductServices.singleProductUpdate(_id, updateData);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: result,
        });
    }
    catch (err) {
        console.error(err);
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    singleUpdate,
    getSearchProduct,
    getDelete,
};
