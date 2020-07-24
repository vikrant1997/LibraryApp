import express from 'express'

import { authController } from '../Controllers'

const router = express.Router()

/// AUTHOR ROUTES ///

// GET request for list of all Authors.
router.get('/list', authController.authorList)
// GET request for creating Author. NOTE This must come before route for id (i.e. display author).
router.get('/create', authController.authorCreateGet)

// POST request for creating Author.
router.post('/create', authController.authorCreatePost)

// GET request to delete Author.
router.get('/:id/delete', authController.authorDeleteGet)

// POST request to delete Author.
router.post('/:id/delete', authController.authoreDeltePost)

// GET request to update Author.
router.get('/:id/update', authController.authorUpdateGet)

// POST request to update Author.
router.post('/:id/update', authController.authorUpdatePost)

// GET request for one Author.
router.get('/:id', authController.authorDetail)

export default router
