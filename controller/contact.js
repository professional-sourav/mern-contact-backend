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
exports.updateContact = exports.getContact = exports.addContact = exports.getContacts = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const contact_1 = __importDefault(require("../model/contact"));
const mongoose_1 = require("mongoose");
exports.getContacts = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.user);
    const contacts = yield contact_1.default.find();
    res.json(contacts);
}));
exports.addContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newContact = new contact_1.default(req.body);
    const contact = yield newContact.save();
    res.json(contact);
}));
exports.getContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foundContact = yield contact_1.default.findById(req.params.id).catch(error => {
        res.status(404);
        throw new mongoose_1.Error("Contact not found!!");
    });
    res.json(foundContact);
}));
exports.updateContact = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateContact = yield contact_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }).catch(error => {
        res.status(500).json(error);
    });
    res.send(updateContact);
}));
