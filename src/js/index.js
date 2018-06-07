/**
 * Main entry of Stream Manager Extension for Red5 Pro HTML SDK, accessible on the `window` global at `red5prosdk_ext_stream_manager`.
 *
 * @file red5pro-ext-stream-manager.min.js
 * @module red5prosdk_ext_stream_manager
 *
 *
 */

// SDK_VERSION, LOG_LEVEL injected from webpack build.
import { LEVELS, establishLogger } from './log'
import { getLogger as _getLogger } from './log'

establishLogger(`${LOG_LEVEL}` || LEVELS.DEBUG) // eslint-disable-line no-undef

/**
 * Sets the log level for logs from the SDK
 * @param {string} level
 *    The specified log level.
 * @see LOG_LEVELS
 */
export const setLogLevel = (level) => {
  if (LEVELS.hasOwnProperty(level.toUpperCase())) {
    establishLogger(level)
    if (console) {
      console.log(`Red5 Pro Stream Manager Extension ${SDK_VERSION}`) // eslint-disable-line no-undef,no-console
    }
  }
}

/**
 * The enumerated log level Strings.
 *    * `TRACE`
 *    * `INFO`
 *    * `DEBUG`
 *    * `WARN`
 *    * `ERROR`
 *    * `FATAL`
 */
export const LOG_LEVELS = LEVELS
/**
 * Retrieves the Logger instance used by the SDK.
 *
 * @returns {Logger}
 *          The logger.
 */
export const getLogger = _getLogger

