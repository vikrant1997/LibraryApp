import mongoose, { model } from 'mongoose'
import moment from 'moment'
import { BookInstanceInterface } from '../interfaces/models'

const { Schema } = mongoose

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, // reference to the associated book
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
    default: 'Maintenance',
  },
  dueBack: { type: Date, default: Date.now },
})

// Virtual for bookinstance's URL
BookInstanceSchema.virtual('url').get((bookInstance: BookInstanceInterface) => {
  return `/catalog/bookinstance/${bookInstance.id}`
})

BookInstanceSchema.virtual('dueDateFormatted').get(
  (bookInstance: BookInstanceInterface) => {
    return moment(bookInstance.dueBack).format('MMMM Do, YYYY')
  },
)

// Export model
export default model<BookInstanceInterface>('BookInstance', BookInstanceSchema)
