"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = __importDefault(require("express"));
const contact_1 = require("../controller/contact");
exports.contactRouter = express_1.default.Router();
exports.contactRouter.get('/', contact_1.getContacts);
exports.contactRouter.post('/', contact_1.addContact);
exports.contactRouter.get('/:id', contact_1.getContact);
exports.contactRouter.put('/:id', contact_1.updateContact);
