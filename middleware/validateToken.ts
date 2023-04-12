import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken'

export const validateToken = asyncHandler(async (req: Request, res: Response, next) => {

    const authToken = req.headers.authorization
    
    if ( authToken?.startsWith("Bearer") ) {

        const token = authToken?.split(' ')[1]

        jwt.verify(token, `${process.env.AUTH_SECRET}`, (error, decode: any) => {
            if (error) {
                res.status(401).send("Unauthorized!!")
            }
            
            req.user = decode?.user
        })
    
        if (!token)
            res.status(401).send("Token is missing!!")
    }

    next()
})
