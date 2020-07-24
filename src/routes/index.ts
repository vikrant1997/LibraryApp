import { Router } from 'express'
import homePageRouter from './homePage.route'
import bookRouter from './book.route'
import genreRouter from './genre.route'
import authorRouter from './author.route'
import bookInstanceRouter from './bookInstance.route'

const router = Router()

router.get('/', homePageRouter)
router.use('/book', bookRouter)
router.use('/genre', genreRouter)
router.use('/author', authorRouter)
router.use('/bookInstance', bookInstanceRouter)

export default router
