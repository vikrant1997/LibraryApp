import mongoose, { model } from 'mongoose'
import { AuthorInterface } from '../interfaces/models'

const { Schema } = mongoose

const AuthorSchema = new Schema({
  firstName: { type: String, required: true, maxlength: 100 },
  familyName: { type: String, required: true, maxlength: 100 },
  dateOfBirth: { type: Date },
  dateOfDeath: { type: Date },
})

// Virtual for author's full name
AuthorSchema.virtual('name').get(function (author: AuthorInterface) {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case

  let fullname = ''
  if (author.firstName && author.familyName) {
    fullname = `${author.familyName}, ${author.firstName}`
  }
  if (!author.firstName || !author.familyName) {
    fullname = ''
  }

  return fullname
})

// Virtual for author's lifespan
AuthorSchema.virtual('lifespan').get(function (author: AuthorInterface) {
  return (
    author.dateOfDeath.getFullYear() - author.dateOfBirth.getFullYear()
  ).toString()
})

// Virtual for author's URL
AuthorSchema.virtual('url').get(function (author: AuthorInterface) {
  return `/catalog/author/${author.id}`
})

// Export model

export default model<AuthorInterface>('Author', AuthorSchema)
