import { Request, Response } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: any) => {
    
    console.log(err);    
}