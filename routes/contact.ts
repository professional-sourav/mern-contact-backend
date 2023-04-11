import express from 'express'
import { addContact, getContact, getContacts, updateContact } from '../controller/contact'

export const contactRouter = express.Router()

contactRouter.get('/', getContacts)
contactRouter.post('/', addContact)

contactRouter.get('/:id', getContact)
contactRouter.put('/:id', updateContact)