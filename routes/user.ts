import express from 'express'
import { login, register } from '../controller/user'

export const userRouter = express.Router()

userRouter.post('/login', login)
userRouter.post('/register', register)
