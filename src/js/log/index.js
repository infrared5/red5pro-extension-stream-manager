import { createLogger } from 'browser-bunyan'
import { RawStream } from './bunyan-writer'

let logger

const formatMessage = (dispatcher) => {
  return message => {
    return `(${dispatcher}) ${message}`
  }
}

const decorate = (level) => {
  return (source, message) => {
    logger[level](formatMessage(source)(message))
  }
}

/*
 * The log levels supported.
 */
export const LEVELS = {
  TRACE: 'trace',
  INFO: 'info',
  DEBUG: 'debug',
  WARN: 'warn',
  ERROR: 'error',
  FATAL: 'fatal'
}

/**
 * Establish logger to use at level.
 *
 * @param {String} level
 *        The level type from `LEVELS`.
 * @param {Array} streamList
 *        The streamList to use in creating bunyon-based logger.
 *
 * @private
 */
export const establishLogger = (level, streamList = undefined) => {
  let streams = []
  streams.push({
    level: level,
    stream: new RawStream(),
    type: 'raw'
  })
  if (streamList) {
    const list = streamList.map(item => {
      item.level = level
    })
    streams = streams.concat(list)
  }
  logger = createLogger({
    level: level,
    name: 'red5pro-ext-sm',
    streams: streams
  })
}

/**
 * Return the determined logger instance.
 *
 * @return {Object}
 *
 * @private
 */
export const getLogger = () => {
  return logger
}

/* Quick access to logger level types. */
export const trace = decorate(LEVELS.TRACE)
export const info = decorate(LEVELS.INFO)
export const debug = decorate(LEVELS.DEBUG)
export const warn = decorate(LEVELS.WARN)
export const error = decorate(LEVELS.ERROR)
export const fatal = decorate(LEVELS.FATAL)
