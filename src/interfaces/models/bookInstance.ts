import { Document, Schema } from 'mongoose'

export interface BookInstanceInterface extends Document {
  book: Schema.Types.ObjectId
  imprint: string
  status: string
  dateOfDeath: Date
  dueBack: Date
}
