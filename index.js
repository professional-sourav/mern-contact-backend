"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const contact_1 = require("./routes/contact");
const db_1 = require("./config/db");
const auth_1 = require("./routes/auth");
const user_1 = require("./routes/user");
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, db_1.connectDB)();
app.use(express_1.default.json());
app.use('/api/auth', auth_1.authRouter);
app.use('/api/contacts', contact_1.contactRouter);
app.use('/api/user', user_1.userRouter);
// app.use(router.route)
// app.use(errorHandler)
app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`);
});
