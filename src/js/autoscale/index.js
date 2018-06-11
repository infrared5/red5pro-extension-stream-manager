import request from './request.js'
import { debug } from '../log'

const NAME = 'Red5ProStreamManagerExt'
const isFailoverConfig = /(rtc|rtmp|hls)/
const isRTC = /(wss|ws)/
// const isRTMP = /(rtmps|rtmp)/
// const isHLS = /(https|http)/

const modifyInitConfigWithResponse = (config, response, autoscaleConfig) => {
  let c
  if (autoscaleConfig.useProxy && isRTC.test(config.protocol)) {
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
    c = {...config,
      host: response.serverAddress,
      app: response.scope.substr(1, response.scope.length-1),
      streamName: response.name
    }
  }
  return c
}

const execute = async (config, count, limit) => {
  const onfailure = () => {
    if (++count < limit) {
      let timeout = setTimeout(() => {
        clearTimeout(timeout)
        execute(config, count, limit)
      }, 1000)
      return true
    }
    return false
  }

  try {
    let response = await request(config)
    return response
  } catch (e) {
    if (!onfailure()) throw e
  }
}

export const autoscaleInit = async (proxy, autoscaleConfig, initConfig) => {
  let retryCount = 0
  const { retryLimit } = autoscaleConfig
  let response

  try {
    response = await execute(autoscaleConfig, retryCount, retryLimit)
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

export const Autoscale = (proxy) => {
  return {
    init: (autoscaleConfig, initConfig) => {
      return autoscaleInit(proxy, autoscaleConfig, initConfig)
    }
  }
}

export const Decorate = (clazz) => {
  let fn = function(autoscaleConfig, initConfig) {
    return autoscaleInit(this, autoscaleConfig, initConfig)
  }
  Object.defineProperty(clazz.prototype, 'autoscale', {
    value: fn
  })
}
