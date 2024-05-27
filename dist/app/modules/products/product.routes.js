"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/api/products', product_controller_1.ProductControllers.createProduct);
router.get('/api/products', product_controller_1.ProductControllers.getSearchProduct);
router.get('/api/products', product_controller_1.ProductControllers.getAllProducts);
router.put('/api/products/:productId', product_controller_1.ProductControllers.singleUpdate);
router.get('/api/products/:productId', product_controller_1.ProductControllers.getSingleProduct);
router.delete('/api/products/:productId', product_controller_1.ProductControllers.getDelete);
exports.ProductRoutes = router;
// kkkkk
