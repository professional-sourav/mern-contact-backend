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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.validateToken = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authToken = req.headers.authorization;
    if (authToken === null || authToken === void 0 ? void 0 : authToken.startsWith("Bearer")) {
        const token = authToken === null || authToken === void 0 ? void 0 : authToken.split(' ')[1];
        jsonwebtoken_1.default.verify(token, `${process.env.AUTH_SECRET}`, (error, decode) => {
            if (error) {
                res.status(401).send("Unauthorized!!");
            }
            req.user = decode === null || decode === void 0 ? void 0 : decode.user;
        });
        if (!token)
            res.status(401).send("Token is missing!!");
    }
    next();
}));
