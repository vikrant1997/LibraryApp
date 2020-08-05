import async from 'async'
import { IRequest, IResponse, INext } from '../interfaces/vendors'
import { Book, BookInstance, Author, Genre } from '../models'
import { Logger } from '../config/logger'

const logger = new Logger('homePage')
const index = (req: IRequest, res: IResponse, next: INext) => {
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
      if (err) {
        return next(err)
      }

      logger.infoResult(`homePage Result`, results)

      res.send(results)
    },
  )
}

export { index }
