import { Document } from 'mongoose'

export interface AuthorInterface extends Document {
  firstName: string
  familyName: string
  dateOfBirth: Date
  dateOfDeath: Date
}
