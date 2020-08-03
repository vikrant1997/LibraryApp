import winston, { stream } from 'winston'

class LoggerService {
  logData: null

  route: string

  logger: winston.Logger

  constructor(route: string) {
    this.logData = null
    this.route = route
    const logger = winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `./logs/${route}.log`,
        }),
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        // winston.format.prettyPrint(),
        winston.format.timestamp(),
        // winston.format.align(),
        winston.format.json(),
        // winston.format.padLevels(),
        winston.format.printf((info) => {
          let message = `${info.level} | ${route}.log | ${info.message} | `
          message = info.obj
            ? `${message}data:${JSON.stringify(info.obj)} | `
            : message
          message = this.logData
            ? `${message}logData:${JSON.stringify(this.logData)} | `
            : message
          return message
        }),
      ),
    })

    this.logger = logger
  }

  stream = {
    write: (text: string) => {
      this.logger.info(text)
    },
  }

  setLogData(logData: any): void {
    this.logData = logData
  }

  async info(message, obj?: any): Promise<void> {
    this.logger.log('info', message, obj ?? { obj })
  }

  async debug(message, obj?: any): Promise<void> {
    this.logger.log(
      'debug',
      message,
      obj ?? {
        obj,
      },
    )
  }

  async error(message, obj?: any): Promise<void> {
    this.logger.log(
      'error',
      message,
      obj ?? {
        obj,
      },
    )
  }
}

export const Logger = LoggerService
