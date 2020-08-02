import { Document, Schema } from 'mongoose'

export interface BookInterface extends Document {
  title: string
  author: Schema.Types.ObjectId
  summary: string
  isbn: Schema.Types.ObjectId
  genre: [{ _id: Schema.Types.ObjectId }]
}
