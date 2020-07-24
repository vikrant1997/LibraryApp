import mongoose, { model } from 'mongoose'
import moment from 'moment'

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
  due_back: { type: Date, default: Date.now },
})

// Virtual for bookinstance's URL
BookInstanceSchema.virtual('url').get(function () {
  return `/catalog/bookinstance/${this._id}`
})

BookInstanceSchema.virtual('dueDateFormatted').get(function () {
  return moment(this.due_back).format('MMMM Do, YYYY')
})

// Export model
export default model('BookInstance', BookInstanceSchema)
