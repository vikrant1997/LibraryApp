import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import express from 'express'
import router from './routes'
import { Database } from './providers'
import { errorMiddleware } from './middleware'
import { Logger } from './config/logger'

Database.init()

const app = express()
const winstonLogger = new Logger('app')

app.use(morgan('short', { stream: winstonLogger.stream }))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.use(errorMiddleware)

export default app
