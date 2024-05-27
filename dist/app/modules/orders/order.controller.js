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
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { order: orderData } = req.body;
    const result = yield order_service_1.OrderServices.createOrderIntoDB(orderData);
    console.log(result);
    res.status(200).json({
        success: true,
        message: 'Order created successfully!',
        data: result,
    });
});
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderServices.getAllOrderFromDB();
    console.log(result);
    res.status(200).json({
        success: true,
        message: 'Order fetched successfully!',
        data: result,
    });
});
const getSearchOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const searchTerm = (_a = req.query) === null || _a === void 0 ? void 0 : _a.email;
        // console.log(searchTerm);
        const result = yield order_service_1.OrderServices.getSearchOrderFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: `Orders fetched successfully!`,
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'An error occurred while searching for products.',
            data: null,
        });
    }
});
exports.OrderControllers = {
    createOrder,
    getAllOrder,
    getSearchOrder,
};
