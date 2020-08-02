import express from 'express'

import { genreController } from '../controllers'

const router = express.Router()

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/create', genreController.genreCreateGet)

// GET request for list of all Genre.
router.get('/list', genreController.genreList)

// POST request for creating Genre.
router.post('/create', genreController.genreCreatePost)

// GET request to delete Genre.
router.get('/:id/delete', genreController.genreDeleteGet)

// POST request to delete Genre.
router.post('/:id/delete', genreController.genreDeletePost)

// GET request to update Genre.
router.get('/:id/update', genreController.genreUpdateGet)

// POST request to update Genre.
router.post('/:id/update', genreController.genreCreatePost)

// GET request for one Genre.
router.get('/:id', genreController.genreDetail)

export default router
