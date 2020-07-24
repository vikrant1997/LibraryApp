// const { BookInstance } = require('../models')
import express, {
  Request as Req,
  Response as Res,
  NextFunction as Next,
} from 'express'

const bookInstanceList = (req: Req, res: Res) => {
  // BookInstance.find()
  //   .populate('book')
  //   .exec(function (err, listInsatances) {
  //     if (err) {
  //       return next(err)
  //     }
  //     res.send(listInsatances)
  //   })
  res.send('NOT IMPLEMENTED: BookInstance list')
}

const bookInstanceDetail = (req: Req, res: Res) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`)
}

const bookInstanceCreateGet = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: BookInstance create GET')
}

const bookInstanceCreatePost = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: BookInstance create POST')
}

const bookInstanceDeleteGet = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: BookInstance delete GET')
}

const bookInstanceDeletePost = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: BookInstance delete POST')
}

const bookInstanceUpdateGet = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: BookInstance update GET')
}

const bookInstanceUpdatePost = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: BookInstance update POST')
}
export {
  bookInstanceList,
  bookInstanceDetail,
  bookInstanceCreateGet,
  bookInstanceCreatePost,
  bookInstanceDeleteGet,
  bookInstanceDeletePost,
  bookInstanceUpdateGet,
  bookInstanceUpdatePost,
}
