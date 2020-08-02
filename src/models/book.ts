import { model, Schema } from 'mongoose'
import { BookInterface } from '../interfaces/models'

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
})

// Virtual for book's URL
BookSchema.virtual('url').get((book: BookInterface) => {
  return `/catalog/book/${book.id}`
})

// Export model
export default model<BookInterface>('Book', BookSchema)
