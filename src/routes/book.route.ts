import express from 'express'

import { bookController } from '../Controllers'

const router = express.Router()

router.get('/', bookController.index)

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get('/create', bookController.bookCreateGet)

// POST request for creating Book.
router.post('/create', bookController.bookCreateGet)

// GET request for list of all Book items.
router.get('/list', bookController.bookList)

// GET request to delete Book.
router.get('/:id/delete', bookController.bookDeleteGet)

// POST request to delete Book.
router.post('/:id/delete', bookController.bookDeletePost)

// GET request to update Book.
router.get('/:id/update', bookController.bookUpdateGet)

// POST request to update Book.
router.post('/:id/update', bookController.bookUpdatePost)

// GET request for one Book.
router.get('/:id', bookController.bookDetail)

export default router
