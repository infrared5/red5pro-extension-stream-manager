import req from './request.js'
import { debug } from '../log'
import {
  timeout,
  asyncWrap,
  modifyInitConfigWithStreamManagerResponse
} from './util'

const NAME = 'Red5ProStreamManagerExt'

/**
 * Allows for retry in requesting on the Stream Manager API.
 *
 * @private
 */
const execute = async (config, count, limit, delay) => {
  debug(NAME, `Attempting ${count+1} of ${limit} with ${delay} millisecond delay...`)
  let response = await asyncWrap(req(config))
  while (!response || (response && response.error)) {
    if (limit === -1 || (++count < limit)) {
      debug(NAME, `Attempting ${count+1} of ${limit} with ${delay} millisecond delay...`)
      await timeout(delay)
      response = await asyncWrap(req(config))
    } else {
      break
    }
  }
  if (!response || response.error) {
    throw new Error(response.message || response.error)
  } else {
    return response
  }
}

/**
 * Attempts to make requests on the Stream Manager for Origin/Edge information.
 *
 * @param {Object} proxy
 *        The established Publisher or Subscriber instance of the Red5 Pro SDK.
 * @param {Object} autoscaleConfig
 *        The configuration object used in communicating with the Stream Manager.
 * @param {Object} initConfig
 *        The initialization configuration to be used in the `init` call on the `proxy` instance once the Stream Manager call has been resolved.
 */
const autoscaleInit = async (proxy, autoscaleConfig, initConfig) => {
  let retryCount = 0
  const { retryLimit, retryDelay } = autoscaleConfig
  let response

  try {
    response = await execute(autoscaleConfig, retryCount, retryLimit || 1, retryDelay || 0)
    const config = modifyInitConfigWithStreamManagerResponse(initConfig, response, autoscaleConfig)
    debug(NAME, `[init-config]:: ${JSON.stringify(config, null, 2)}`)
    return proxy.init(config)
  } catch (e) {
    throw e
  }
}

/**
 * Top-level decorate function.
 *
 * @param {Object} proxy
 *        The established Publisher or Subscriber instance of the Red5 Pro SDK.
 *  @private
 */
export const Autoscale = (proxy) => {
  return {
    init: (autoscaleConfig, initConfig) => {
      return autoscaleInit(proxy, autoscaleConfig, initConfig)
    }
  }
}

/**
 * Class decorator for Publisher and Subscriber types from the Red5 Pro HTML SDK.
 *
 * @param {Class} clazz
 *        The Class reference to apply the `autoscale` function to.
 * @private
 */
export const Decorate = (clazz) => {
  let fn = function(autoscaleConfig, initConfig) {
    return autoscaleInit(this, autoscaleConfig, initConfig)
  }
  Object.defineProperty(clazz.prototype, 'autoscale', {
    value: fn,
    enumerable: true
  })
}

export { autoscaleInit }
