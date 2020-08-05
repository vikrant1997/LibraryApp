import async from 'async'
import { IRequest, IResponse, INext, IError } from '../interfaces/vendors'
import { Book, BookInstance } from '../models'
import HttpException from '../exceptions/HttpException'
import { Logger } from '../config/logger'

const logger = new Logger('bookList Page')
const index = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Site Home Page')
}

const bookList = (req: IRequest, res: IResponse, next: INext) => {
  Book.find({}, 'title author')
    .populate('author')
    .exec((err: Error, listBooks) => {
      if (err) {
        return next(err)
      }
      logger.infoResult('bookList Result', listBooks)

      res.send(listBooks)
    })
  // res.send('NOT IMPLEMENTED: Book list')
}

const bookDetail = (req: IRequest, res: IResponse, next: INext) => {
  // res.send('NOT IMPLEMENTED: Book detail GET')
  async.parallel(
    {
      book(callback) {
        Book.findById(req.params.id)
          .populate('author')
          .populate('genre')
          .exec(callback)
      },
      bookInstance(callback) {
        BookInstance.find({ book: req.params.id }).exec(callback)
      },
    },
    (err: IError, results) => {
      if (err) {
        return next(err)
      }
      if (results.book == null) {
        const queryErr = new HttpException(404, 'Book not found')
        queryErr.status = 404
        return next(err)
      }
      res.send(results)
    },
  )
}

const bookCreateGet = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Book create GET')
}

const bookCreatePost = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Book create POST')
}

const bookDeleteGet = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Book delete GET')
}

const bookDeletePost = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Book delete POST')
}

const bookUpdateGet = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Book update GET')
}

const bookUpdatePost = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Book update POST')
}
export {
  index,
  bookList,
  bookDetail,
  bookCreateGet,
  bookCreatePost,
  bookDeleteGet,
  bookDeletePost,
  bookUpdateGet,
  bookUpdatePost,
}
