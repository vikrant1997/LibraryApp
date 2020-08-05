import HttpException from '../exceptions/HttpException'
import { Logger } from '../config/logger'
import { IRequest, IResponse, INext } from '../interfaces/vendors'
import { Author } from '../models'

const authorList = (req: IRequest, res: IResponse, next: INext): void => {
  Author.find()
    .populate('author')
    .sort([['familyName ', 'ascending']])
    .exec((err: Error, listAuthors) => {
      if (err) {
        return next(err)
      }
      res.send(listAuthors)
    })
}

const authorDetail = (req: IRequest, res: IResponse) => {
  res.send(`Not Implemented: Author Detail ${req.params.id} ${req.params.id}`)
}

const authorCreateGet = (req: IRequest, res: IResponse) => {
  res.send('Not Implemented: Author create GET')
}

const authorCreatePost = (req: IRequest, res: IResponse) => {
  res.send('Not Implemented: Author create POST')
}

const authorDeleteGet = (req: IRequest, res: IResponse) => {
  res.send('Not Implemented: Author delete GET')
}

const authoreDeltePost = (req: IRequest, res: IResponse) => {
  res.send('Not Implemented: Author delte POST')
}

const authorUpdateGet = (req: IRequest, res: IResponse) => {
  res.send('Not Implemented: Author update GET')
}

const authorUpdatePost = (req: IRequest, res: IResponse) => {
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
