import express from 'express'
import { addContact, getContacts } from '../controller/contact'

export const router = express.Router()

router.get('/api/contacts', getContacts)
router.post('/api/contacts', addContact)