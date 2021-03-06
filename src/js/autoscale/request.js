import environment from '../env/browser'

const defaultConfig = {
  action: undefined,      // required
  protocol: 'https',      // required, default=https
  host: undefined,        // required
  port: undefined,        // optional
  scope: 'live',          // optional, default=live
  streamName: undefined,  // required
  apiVersion: '3.0',      // required, default=3.0
  accessToken: undefined, // optional
  retryLimit: 0,          // optional, default (no retry)
  retryDelay: 1000,       // optional, default=1000
  useProxy: true          // optional, default=true. Enforces connection proxy for WebRTC clients
}

/**
 * Encode the value of each key and return a new object.
 *
 * @param {Object} valueObject
 *        The object whose values should be encoded.
 * @return {Object}
 *
 * @private
 */
const encodeKeyValues = (valueObject) => {
  let encoded = {}
  Object.keys(valueObject).forEach((key, index) => { // eslint-disable-line no-unused-vars
    encoded[key] = encodeURIComponent(valueObject[key])
  })
  return encoded
}

/**
 * Generates proper URL for request on Stream Manager.
 *
 * @private
 */
const endpointFromConfiguration = (configuration) => {
  const {
    action,
    protocol,
    host,
    port,
    scope,
    streamName,
    apiVersion,
    accessToken,
    connectionParams
  } = configuration
  let params = {
    action: action
  }
  const portURI = port ? ':' + port : ''
  let url = `${protocol}://${host}${portURI}/streammanager/api/${apiVersion}/event/${scope}/${streamName}`
  if (connectionParams) {
    const encodedParams = encodeKeyValues(connectionParams)
    params = Object.assign({}, params, encodedParams)
  }
  let kv = []
  Object.keys(params).forEach((key, index) => { // eslint-disable-line no-unused-vars
    kv.push([key, params[key]].join('='))
  })
  if (kv.length > 0) {
    url += '?' + (kv.join('&'))
  }
  if (accessToken) {
    url += `&accessToken=${accessToken}`
  }
  return url
}

/**
 * Makes a request on the Stream Manager for Origin or Edge information based on passed in configuration.
 *
 *  @param {Object} config
 *          The configuration object to use in constructing the URL request.
 *
 *  @example
 *  // The following is an example of the configuration to pass
 *  const autoscaleConfig = {
 *    action: 'broadcast',    // required, either 'broadcast' or 'subscribe'
 *    protocol: 'https',      // required, default=https
 *    host: 'sm.company.org', // required, the FQDN of the Stream Manager
 *    port: undefined,        // optional, if `undefined` assumes it served over SSL
 *    scope: 'live',          // optional, default=live
 *    streamName: 'mystream', // required
 *    apiVersion: '3.0',      // required, default=3.0
 *    region: undefined,      // optional, when using the optional `region` query param
 *    accessToken: undefined, // optional, when using security on Stream Manager
 *    retryLimit: 0,          // optional, default (no retry)
 *    retryDelay: 1000,       // optional, default=1000
 *    useProxy: true          // optional, default=true. Enforces connection proxy for WebRTC clients
 *  }
 */
const req = async (config) => {
  const configuration = Object.assign({}, defaultConfig, config)
  const url = endpointFromConfiguration(configuration)

  try {
    let response = await environment.fetch(url)
    if ((response.status >= 200 && response.status < 300) &&
      (response.headers.get('content-type') &&
      response.headers.get('content-type').toLowerCase().indexOf('application/json') >= 0)) {

      let payload = await response.json()
      return payload

    } else {
      let error = new Error(`Could not properly parse response from ${url}.`)
      try {
        error.response = await response.json()
      } catch (e) {
        error.response = response
      }
      throw error
    }
  } catch (e) {
    throw e
  }
}

export default req
