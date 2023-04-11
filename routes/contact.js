"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const contact_1 = require("../controller/contact");
exports.router = express_1.default.Router();
exports.router.get('/api/contacts', contact_1.getContacts);
exports.router.post('/api/contacts', contact_1.addContact);
exports.router.get('/api/contacts/:id', contact_1.getContact);
exports.router.put('/api/contacts/:id', contact_1.updateContact);
