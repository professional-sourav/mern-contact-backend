"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const contactSchema = new mongoose_1.default.Schema({
    user_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        require: [true, 'Please add the name']
    },
    email: {
        type: String,
        require: [true, 'Please add the name']
    },
    phone: {
        type: String,
        require: [true, 'Please add the name']
    },
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('Contact', contactSchema);
