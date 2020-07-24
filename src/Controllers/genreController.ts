import async from 'async'
import express, {
  Request as Req,
  Response as Res,
  NextFunction as Next,
} from 'express'
// const { Book, Genre } = require('../models')

const genreList = async (req: Req, res: Res) => {
  // Genre.find()
  //   .sort([['name']])
  //   .exec(function (err, listGenre) {
  //     if (err) {
  //       console.log(err)
  //       return next(err)
  //     }
  //     res.send(listGenre)
  //   })
  res.send('NOT IMPLEMENTED: Genre List GET')
}

const genreDetail = (req: Req, res: Res, next: Next) => {
  // async.parallel(
  //   {
  //     genre(callback) {
  //       Genre.findById(req:Req.para:Resms.id).exec(callback)
  //     },
  //     genreBooks(callback) {
  //       Book.find({ genre: req.params.id }).exec(callback)
  //     },
  //   },
  //   function (err, results) {
  //     if (err) return next(err)
  //     if (results.genre == null) {
  //       var err = new Error('Genre not found')
  //       err.status = 404
  //       return next(err)
  //     }
  //     res.send(results)
  //   },
  // )
  res.send('NOT IMPLEMENTED: Genre detail GET')
}

const genreCreateGet = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: Genre create GET')
}

const genreCreatePost = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: Genre create POST')
}

const genreDeleteGet = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: Genre delete GET')
}

const genreDeletePost = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: Genre delete POST')
}

const genreUpdateGet = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: Genre update GET')
}

const genreUpdatePost = (req: Req, res: Res) => {
  res.send('NOT IMPLEMENTED: Genre update POST')
}

export {
  genreList,
  genreDetail,
  genreCreateGet,
  genreCreatePost,
  genreDeleteGet,
  genreDeletePost,
  genreUpdateGet,
  genreUpdatePost,
}
