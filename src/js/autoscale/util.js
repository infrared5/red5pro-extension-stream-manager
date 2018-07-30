const isFailoverConfig = /(rtc|rtmp|hls)/
const isRTC = /(wss|ws)/
const isHLS = /(https|http)/
// const isRTMP = /(rtmps|rtmp)/

const PROXY_SCOPE = 'streammanager'

const stripForwardSlash = (str) => {
  return str.charAt(0) === '/' ? str.substr(1, str.length-1) : str
}

const assignConnectionParams = (config, response, autoscaleConfig) => {
  let c
  const streamName = response.name
  const address = response.serverAddress
  const appContext = stripForwardSlash(response.scope)
  const hasSecureDomain = typeof response.hostname !== 'undefined'
  // WebRTC publishers and subscriber and HLS subscribers most likely will require `useProxy`.
  // This is due to Origin and Edge IPs being returned from the Stream Manager API.
  // Only Fully Qualified Domain Names can have an associated cert and WebRTC requires SSL.
  if (autoscaleConfig.useProxy && isRTC.test(config.protocol)) {
    // The structure of a "proxied" configuration is to pass `connectionParams`
    //  describing the endpoint (Origin/Edge) and requesting through the Stream Manager webapp.
    const connectionParams = {...config.connectionParams,
      host: address,
      app: appContext
    }
    c = {...config,
      protocol: config.protocol,
      port: config.port,
      streamName: streamName,
      host: autoscaleConfig.host,
      app: PROXY_SCOPE,
      connectionParams: connectionParams
    }
  } else if (autoscaleConfig.useProxy && isHLS.test(config.protocol)) {
    const connectionParams = {...config.connectionParams,
      host: address,
      app: appContext
    }
    const socketParams = {...config.socketParams,
      protocol: autoscaleConfig.protocol === 'http' ? 'ws' : 'wss',
      host: autoscaleConfig.host,
      app: PROXY_SCOPE
    }
    c = {...config,
      host: address,
      app: appContext,
      streamName: streamName,
      connectionParams: connectionParams,
      socketParams: socketParams
    }
  } else {
    // If we don't need to proxy, then just inject the Stream Manager response attributes.
    if (!hasSecureDomain) {
      c = {...config,
        host: address,
        app: appContext,
        streamName: streamName
      }
    } else {
      // If we have a secure domain, (`hostname` in response) we are secure.
      c = {...config,
        host: response.hostname,
        app: appContext,
        streamName: streamName
      }
    }
  }
  return c
}

/**
 * Modifies and returns new intialization configuration used for publisher or subscriber.
 * This configuration can vary based on target tech and the `useProxy` attribute of the autoscale configuration.
 *
 * @param {Object} initConfig
 *                  The initialization configuration to modify.
 * @param {Object} respnose
 *                  The response configuration from the Stream Manager.
 * @param {Object} autoscaleConfig
 *                  The original configuration used for accessing the Stream Manager API.
 * @returns {Object}
 */
const modifyInitConfigWithStreamManagerResponse = (initConfig, response, autoscaleConfig) => {
  let modifiedConfig = {}
  const keys = Object.keys(initConfig)
  if (isFailoverConfig.test(keys.toString())) {
    let key
    for (key in initConfig) {
      if (initConfig.hasOwnProperty(key)) {
        modifiedConfig[key] = assignConnectionParams(initConfig[key], response, autoscaleConfig)
      }
    }
  } else {
    modifiedConfig = assignConnectionParams(initConfig, response, autoscaleConfig)
  }
  return modifiedConfig
}

/**
 * Nicely wraps an async in a promise so we can use in-line without try...catch.
 */
const asyncWrap = (p) => {
  return new Promise(resolve => {
    p.then(response => {
      resolve(response)
    }).catch(e => {
      resolve({
        error: e.message,
        message: e.response ? e.response.errorMessage : undefined
      })
    })
  })
}

/**
 * Promisified setTimeout.
 */
const timeout = (delay) => {
  return new Promise(resolve => setTimeout(resolve, delay))
}

export { timeout, asyncWrap, modifyInitConfigWithStreamManagerResponse }
