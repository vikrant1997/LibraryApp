import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import express from 'express'

import router from './routes'
import { Database } from './providers'
import { errorMiddleware, Logger } from './middleware'

Database.init()

const app = express()
const winston = new Logger('app')

app.use(morgan('short', { stream: winston.stream }))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.use(morgan(':body'))

app.use(errorMiddleware)

export default app
