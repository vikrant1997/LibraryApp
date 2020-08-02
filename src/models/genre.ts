import mongoose, { model } from 'mongoose'
import { GenreInterface } from '../interfaces/models'

const { Schema } = mongoose

// Defining Schema
const GenreSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
})

// Virtual for url
GenreSchema.virtual('url').get(function (genre: GenreInterface) {
  return `/catalog/genre/${genre.id}`
})

export default model<GenreInterface>('Genre', GenreSchema)
