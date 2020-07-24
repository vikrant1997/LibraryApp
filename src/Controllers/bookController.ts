import async from 'async'
import express, {
  Request as Req,
  Response as Res,
  NextFunction as Next,
} from 'express'
// const { BookInstance, Book } = require('../models')

const index = function (req: Req, res: Res) {
  res.send('NOT IMPLEMENTED: Site Home Page')
}

const bookList = function (req: Req, res: Res, next: Next) {
  // Book.find({}, 'title author')
  //   .populate('author')
  //   .exec(function (err, list_books) {
  //     if (err) {
  //       console.log(err)
  //       return :Next
  //     }

  //     res.send(list_books)
  //   })
  res.send('NOT IMPLEMENTED: Book list')
}

const bookDetail = function (req: Req, res: Res) {
  res.send('NOT IMPLEMENTED: Book detail GET')
  // async.parallel(
  //   {
  //     book(callback) {
  //       Book.findById(req:Req.para:Resms.id)
  //         .populate('author')
  //         .populate('genre')
  //         .exec(callback)
  //     },
  //     bookInstance(callback) {
  //       BookInstance.find({ book: req.params.id }).exec(callback)
  //     },
  //   },
  //   function (err, results) {
  //     if (err) {
  //       return next(err)
  //     }
  //     if (results.book == null) {
  //       var err = new Error('Book not found')
  //       err.status = 404
  //       return next(err)
  //     }
  //     res.send(results)
  //   },
  // )
}

const bookCreateGet = function (req: Req, res: Res) {
  res.send('NOT IMPLEMENTED: Book create GET')
}

const bookCreatePost = function (req: Req, res: Res) {
  res.send('NOT IMPLEMENTED: Book create POST')
}

const bookDeleteGet = function (req: Req, res: Res) {
  res.send('NOT IMPLEMENTED: Book delete GET')
}

const bookDeletePost = function (req: Req, res: Res) {
  res.send('NOT IMPLEMENTED: Book delete POST')
}

const bookUpdateGet = function (req: Req, res: Res) {
  res.send('NOT IMPLEMENTED: Book update GET')
}

const bookUpdatePost = function (req: Req, res: Res) {
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
