import async from 'async'
import { IRequest, IResponse, INext } from '../interfaces/vendors'
import { Genre, Book } from '../models'
import HttpException from '../exceptions/HttpException'

const genreList = async (req: IRequest, res: IResponse, next: INext) => {
  Genre.find()
    .sort([['name']])
    .exec((err, listGenre) => {
      if (err) {
        return next(err)
      }
      res.send(listGenre)
    })
  // res.send('NOT IMPLEMENTED: Genre List GET')
}

const genreDetail = (req: IRequest, res: IResponse, next: INext) => {
  async.parallel(
    {
      genre(callback) {
        Genre.findById(req.params.id).exec(callback)
      },
      genreBooks(callback) {
        Book.find({ genre: req.params.id }).exec(callback)
      },
    },
    (err, results) => {
      if (err) return next(err)
      if (results.genre == null) {
        const queryError = new HttpException(404, 'Genre not found')

        return next(queryError)
      }
      res.send(results)
    },
  )
  // res.send('NOT IMPLEMENTED: Genre detail GET')
}

const genreCreateGet = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Genre create GET')
}

const genreCreatePost = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Genre create POST')
}

const genreDeleteGet = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Genre delete GET')
}

const genreDeletePost = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Genre delete POST')
}

const genreUpdateGet = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: Genre update GET')
}

const genreUpdatePost = (req: IRequest, res: IResponse) => {
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
