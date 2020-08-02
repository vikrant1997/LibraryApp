import express from 'express'
import { homePageController } from '../controllers'

const router = express.Router()

router.get('/', homePageController.index)

export default router
