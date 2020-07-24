import mongoose, { model } from 'mongoose'

const { Schema } = mongoose

// Defining Schema
const GenreSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
})

// Virtual for url
GenreSchema.virtual('url').get(function () {
  return `/catalog/genre/${this._id}`
})

export default model('Genre', GenreSchema)
