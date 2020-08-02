import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import mongoose from 'mongoose'

import express from 'express'

import router from './routes'

import { errorMiddleware, Logger } from './middleware'

const app = express()
app.use(logger('dev'))

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/libraryDB'
mongoose
  .connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((err) => Logger.warn(err))

// Get the default connection
const db = mongoose.connection

// Bind connection to error event (to get notification of connection errors)
db.on('error', (err) => Logger.warn(err))
db.once('open', () => {
  Logger.info(`We are connected to Mongoose at ${mongoDB}!!!`)
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

app.use(errorMiddleware)

export default app
