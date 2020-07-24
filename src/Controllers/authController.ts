// import Author from '../models'
import express, {
  Request as Req,
  Response as Res,
  NextFunction as Next,
} from 'express'

const authorList = (req: Req, res: Res) => {
  // Author.find()
  //   .populate('author')
  //   .sort([['familyName ', 'ascending']])
  //   .exec(function (err, listAuthors) {
  //     if (err) {
  //       return next(err)
  //     }
  //     res.send(listAuthors)
  //   })
  res.send('Not Implemented: Author List GET')
}

const authorDetail = (req: Req, res: Res) => {
  res.send(`Not Implemented: Author Detail ${req.params.id} ${req.params.id}`)
}

const authorCreateGet = (req: Req, res: Res) => {
  res.send('Not Implemented: Author create GET')
}

const authorCreatePost = (req: Req, res: Res) => {
  res.send('Not Implemented: Author create POST')
}

const authorDeleteGet = (req: Req, res: Res) => {
  res.send('Not Implemented: Author delete GET')
}

const authoreDeltePost = (req: Req, res: Res) => {
  res.send('Not Implemented: Author delte POST')
}

const authorUpdateGet = (req: Req, res: Res) => {
  res.send('Not Implemented: Author update GET')
}

const authorUpdatePost = (req: Req, res: Res) => {
  res.send('Not Implemented:Author update POST')
}

export {
  authorList,
  authorDetail,
  authorCreateGet,
  authorCreatePost,
  authorDeleteGet,
  authoreDeltePost,
  authorUpdateGet,
  authorUpdatePost,
}
