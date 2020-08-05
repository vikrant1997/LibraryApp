import winston from 'winston'
import colorize from 'json-colorizer'

class LoggerService {
  route: string

  logger: winston.Logger

  constructor(route: string) {
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

          message = info.result
            ? `${message}data:\n${colorize(
                JSON.stringify(info.result, null, 4),
              )} | `
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

  info(message: string, obj?: any): void {
    this.logger.info({ message, obj })
  }

  infoResult(message: string, result?: any): void {
    this.logger.info({ message, result })
  }

  debug(message: string, obj?: any): void {
    this.logger.debug({ message, obj })
  }

  error(message: string, obj?: any): void {
    this.logger.error({ message, obj })
  }
}

export const Logger = LoggerService
