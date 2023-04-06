import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Contact from "../model/contact";

export const getContacts = asyncHandler( async (req: Request, res: Response) => {

    const contacts = await Contact.find()

    res.json(contacts);
})

export const addContact = asyncHandler( async (req: Request, res: Response) => {

    const newContact = new Contact(req.body)
    const contact = await newContact.save()

    res.json(contact);
})