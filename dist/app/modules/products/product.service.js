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
exports.ProductServices = void 0;
const product_model_1 = require("./product.model");
// service
// post data
const createProductIntoDB = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(productData);
    return result;
});
// get data
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.find();
    return result;
});
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.findOne({ id });
    return result;
});
const getSearchProductFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {
        name: { $regex: searchTerm, $options: 'i' },
    };
    // console.log(query);
    const products = yield product_model_1.ProductModel.find(query);
    return products;
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("deleted",id);
    const result = yield product_model_1.ProductModel.deleteOne({ id });
    // console.log(result);
    return result;
});
const singleProductUpdate = (id, Data) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log('update id', id);
    const result = yield product_model_1.ProductModel.findByIdAndUpdate(id, {
        $set: {
            name: Data === null || Data === void 0 ? void 0 : Data.name,
            description: Data === null || Data === void 0 ? void 0 : Data.description,
            price: Data === null || Data === void 0 ? void 0 : Data.price,
            category: Data === null || Data === void 0 ? void 0 : Data.category,
            tags: Data === null || Data === void 0 ? void 0 : Data.tags,
            variants: Data === null || Data === void 0 ? void 0 : Data.variants,
            inventory: Data === null || Data === void 0 ? void 0 : Data.inventory,
        },
    }, { upsert: true });
    // console.log('Update result:', result);
    return result;
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    singleProductUpdate,
    getSearchProductFromDB,
    deleteProduct,
};
