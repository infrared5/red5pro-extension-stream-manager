import req from './request.js'
import { debug } from '../log'

const NAME = 'Red5ProStreamManagerExt'
const isFailoverConfig = /(rtc|rtmp|hls)/
const isRTC = /(wss|ws)/
// const isRTMP = /(rtmps|rtmp)/
// const isHLS = /(https|http)/

const timeout = (delay) => {
  return new Promise(resolve => setTimeout(resolve, delay))
}

/**
 * Modifies the intialization configuration used for publisher or subscriber.
 * This configuration can vary based on target tech and the `useProxy` attribute of the autoscale configuration.
 *
 * @private
 */
const modifyInitConfigWithResponse = (config, response, autoscaleConfig) => {
  let c
  // WebRTC most likely will require `useProxy`.
  // This is due to Origin and Edge IPs being returned from the Stream Manager API.
  // Only Fully Qualified Domain Names can have an associated cert and WebRTC requires SSL.
  if (autoscaleConfig.useProxy && isRTC.test(config.protocol)) {
    // The structure of a "proxied" configuration is to pass `connectionParams`
    //  describing the endpoint (Origin/Edge) and requesting through the Stream Manager webapp.
    const connectionParams = {...config.connectionParams,
      host: response.serverAddress,
      app: response.scope.substr(1, response.scope.length-1)
    }
    c = {...config,
      protocol: config.protocol,
      port: config.port,
      streamName: response.name,
      host: autoscaleConfig.host,
      app: 'streammanager',
      connectionParams: connectionParams
    }
  } else {
    // If we don't need to proxy, then just inject the Stream Manager response attributes.
    c = {...config,
      host: response.serverAddress,
      app: response.scope.substr(1, response.scope.length-1),
      streamName: response.name
    }
  }
  return c
}

/**
 * Nicely wraps an async in a promise so we can use in-line without try...catch.
 *
 * @private
 */
const asyncWrap = (p) => {
  return new Promise(resolve => {
    p.then(response => {
      resolve(response)
    }).catch(e => {
      resolve({
        error: e.message,
        message: e.response.errorMessage
      })
    })
  })
}

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
    response = await execute(autoscaleConfig, retryCount, retryLimit, retryDelay)
    const keys = Object.keys(initConfig)
    if (isFailoverConfig.test(keys.toString())) {
      let key
      for (key in initConfig) {
        initConfig[key] = modifyInitConfigWithResponse(initConfig[key], response, autoscaleConfig)
      }
    } else {
      initConfig = modifyInitConfigWithResponse(initConfig, response, autoscaleConfig)
    }
    debug(NAME, `[init-config]:: ${JSON.stringify(initConfig, null, 2)}`)
    return proxy.init(initConfig)
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
