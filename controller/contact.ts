import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Contact from "../model/contact";
import { Error } from "mongoose";

export const getContacts = asyncHandler( async (req: Request, res: Response) => {

    const contacts = await Contact.find()

    res.json(contacts);
})

export const addContact = asyncHandler( async (req: Request, res: Response) => {

    const newContact = new Contact(req.body)
    const contact = await newContact.save()

    res.json(contact);
})

export const getContact = asyncHandler( async (req: Request, res: Response) => {

    const foundContact = await Contact.findById(req.params.id).catch(error => {
        res.status(404)
        throw new Error("Contact not found!!")
    })      

    res.json(foundContact)
})

export const updateContact = asyncHandler(async (req: Request, res: Response) => {

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    ).catch(error => {
        res.status(500).json(error)
    })

    res.send(updateContact)
})
