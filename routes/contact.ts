import express from 'express'
import { addContact, getContact, getContacts, updateContact } from '../controller/contact'

export const router = express.Router()

router.get('/api/contacts', getContacts)
router.post('/api/contacts', addContact)

router.get('/api/contacts/:id', getContact)
router.put('/api/contacts/:id', updateContact)