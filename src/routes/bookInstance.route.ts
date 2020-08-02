import express from 'express'

import { bookInstanceController } from '../controllers'

const router = express.Router()

// GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.get('/create', bookInstanceController.bookInstanceCreateGet)

// GET request for list of all BookInstance.
router.get('/list', bookInstanceController.bookInstanceList)

// POST request for creating BookInstance.
router.post('/create', bookInstanceController.bookInstanceCreateGet)

// GET request to delete BookInstance.
router.get('/:id/delete', bookInstanceController.bookInstanceDeleteGet)

// POST request to delete BookInstance.
router.post('/:id/delete', bookInstanceController.bookInstanceDeletePost)

// GET request to update BookInstance.
router.get('/:id/update', bookInstanceController.bookInstanceUpdatePost)

// POST request to update BookInstance.
router.post('/:id/update', bookInstanceController.bookInstanceUpdatePost)

// GET request for one BookInstance.
router.get('/:id', bookInstanceController.bookInstanceDetail)

export default router
