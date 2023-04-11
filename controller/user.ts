import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import User from "../model/user"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const register = asyncHandler( async (req: Request, res: Response) => {

    const { name, email, password } = req.body;

    if ( !name || !email || !password )
        res.status(400).send({
            "message": "Name, Email and Password is required!"
        })

    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = await new User({
        name,
        email,
        password: hashedPassword
    }).save()

    res.send({
        name: newUser.name,
        email: newUser.email
    })
} )

export const login = asyncHandler(async (req: Request, res: Response) => {

    const {email, password} = req.body;

    if (!email || !password)
        res.status(400).send({
            'message': "Email and password is required to sign in"
        })

    const user: any = await User.findOne({email})

    if (user && await bcrypt.compare(password, user.password)) {

        const accessToken = jwt.sign(
            {
                user: {
                    id: user.id,
                    email: user.email
                }
            },            
            `${process.env.AUTH_SECRET}`,
            {expiresIn: "1m"}
        )

        res.send({
            accessToken: accessToken
        })
    }

    res.status(400).send("Unable to login!!")
})
