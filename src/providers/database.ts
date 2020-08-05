import mongoose from 'mongoose'
import { Logger } from '../config/logger'

const logger = new Logger('database')

class Database {
  public static init(): void {
    const mongoDB = 'mongodb://127.0.0.1/libraryDB'
    mongoose
      .connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true })
      .catch((err) => logger.error(err))

    // Get the default connection
    const db = mongoose.connection

    // Bind connection to error event (to get notification of connection errors)
    db.on('error', (err) => logger.error(err))
    db.once('open', () => {
      logger.info(`We are connected to Mongoose at ${mongoDB}!!!`)
    })
  }
}
export { Database }
