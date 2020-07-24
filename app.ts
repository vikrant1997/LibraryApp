import createError from 'http-errors'

import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import mongoose from 'mongoose'

import express, {
  Request as Req,
  Response as Res,
  NextFunction as Next,
} from 'express'

import router from './src/routes'

const app = express()

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/libraryDB'
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })

// Get the default connection
const db = mongoose.connection

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', function () {
  console.log('We are connected to Mongoose!!!')
})

//  view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(router)

// catch 404 and forward to error handler
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(function (err: any, req: Req, res: Res, next: Next) {
  next(createError(404))
})

// error handler
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(function (err: any, req: Req, res: Res, next: Next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app
