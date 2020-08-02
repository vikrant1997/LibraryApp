import { IRequest, IResponse, INext } from '../interfaces/vendors'
import { BookInstance } from '../models'

const bookInstanceList = (req: IRequest, res: IResponse, next: INext) => {
  BookInstance.find()
    .populate('book')
    .exec((err, listInsatances) => {
      if (err) {
        return next(err)
      }
      res.send(listInsatances)
    })
  // res.send('NOT IMPLEMENTED: BookInstance list')
}

const bookInstanceDetail = (req: IRequest, res: IResponse) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`)
}

const bookInstanceCreateGet = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: BookInstance create GET')
}

const bookInstanceCreatePost = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: BookInstance create POST')
}

const bookInstanceDeleteGet = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: BookInstance delete GET')
}

const bookInstanceDeletePost = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: BookInstance delete POST')
}

const bookInstanceUpdateGet = (req: IRequest, res: IResponse) => {
  res.send('NOT IMPLEMENTED: BookInstance update GET')
}

const bookInstanceUpdatePost = (req: IRequest, res: IResponse) => {
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
