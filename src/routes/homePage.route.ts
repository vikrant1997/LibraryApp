import express from 'express'
import { homePageController } from '../Controllers'

const router = express.Router()

router.get('/', homePageController.index)

export default router
