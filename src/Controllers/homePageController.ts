import async from 'async'
import { IRequest, IResponse } from '../interfaces/vendors'
import { Book, BookInstance, Author, Genre } from '../models'

const index = (req: IRequest, res: IResponse) => {
  async.parallel(
    {
      bookCount(callback) {
        Book.countDocuments({}, callback)
      },
      bookInstance(callback) {
        BookInstance.countDocuments({}, callback)
      },
      bookInstancAvailableCount(callback) {
        BookInstance.countDocuments({ status: 'Available' }, callback)
      },
      authorCount(callback) {
        Author.countDocuments({}, callback)
      },
      genreCount(callback) {
        Genre.countDocuments({}, callback)
      },
    },

    (err, results) => {
      // console.log(err)
      if (err) throw err
      // console.log(results)
      res.send(results)
    },
  )
}

export { index }
