import mongoose, { model } from 'mongoose'

const { Schema } = mongoose

const AuthorSchema = new Schema({
  firstName: { type: String, required: true, maxlength: 100 },
  familyName: { type: String, required: true, maxlength: 100 },
  dateOfBirth: { type: Date },
  dateOfDeath: { type: Date },
})

// Virtual for author's full name
AuthorSchema.virtual('name').get(function () {
  // To avoid errors in cases where an author does not have either a family name or first name
  // We want to make sure we handle the exception by returning an empty string for that case

  let fullname = ''
  if (this.firstName && this.familyName) {
    fullname = `${this.familyName}, ${this.firstName}`
  }
  if (!this.firstName || !this.familyName) {
    fullname = ''
  }

  return fullname
})

// Virtual for author's lifespan
AuthorSchema.virtual('lifespan').get(function () {
  return (this.dateOfDeath.getYear() - this.dateOfBirth.getYear()).toString()
})

// Virtual for author's URL
AuthorSchema.virtual('url').get(function () {
  return `/catalog/author/${this._id}`
})

// Export model
export default model('Author', AuthorSchema)
