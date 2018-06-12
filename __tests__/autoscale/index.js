/* global jest, describe, it, beforeEach, afterEach, expect */

import { Autoscale, Decorate, autoscaleInit } from '../../src/js/autoscale'
import * as req from '../../src/js/autoscale/request'
import {
  modifyInitConfigWithStreamManagerResponse
} from '../../src/js/autoscale/util'
import environment from '../../src/js/env/browser'
import { LEVELS, establishLogger } from '../../src/js/log'

establishLogger(LEVELS.FATAL)

describe('Autoscale', () => {
  let proxy

  beforeEach(() => {
    proxy = new Object()
  })

  afterEach(() => {
    proxy = undefined
  })

  it('should return an init method', () => {
    let autoscale = Autoscale(proxy)
    expect(autoscale.hasOwnProperty('init')).toBe(true)
  })

})

describe('Decorate', () => {
  let proxy

  beforeEach(() => {
    proxy = Object
  })

  afterEach(() => {
    proxy = undefined
  })

  it('should define an autoscale Function property', () => {
    Decorate(proxy)
    expect(proxy.prototype.propertyIsEnumerable('autoscale')).toBe(true)
  })
})

describe('autoscaleInit:success', () => {
  const autoscaleConfig = {
    retryLimit: 3,
    retryDelay: 500,
    action: 'broadcast',
    protocol: 'https',
    host: 'sm.company.org',
    scope: 'live',
    apiVersion: '3.0',
    streamName: 'mystream'
  }
  const smResponse = {
    serverAddress: '127.0.0.0',
    scope: '/live2',
    name: 'mystream1'
  }

  beforeEach(() => {
    environment.fetch = jest.fn(() => {
      return new Promise(resolve => {
        resolve({
          status: 200,
          headers: {
            get: jest.fn(() => 'application/json')
          },
          json: jest.fn(() => new Promise(resolve => resolve(smResponse)))
        })
      })
    })
  })

  afterEach(() => {
    environment.fetch.mockClear()
    environment.fetch.mockRestore()
  })

  it('should request on properly structured URL', async () => {
    const endpoint = 'https://sm.company.org/streammanager/api/3.0/event/live/mystream?action=broadcast'
    await req.default({...autoscaleConfig})
    expect(environment.fetch).toHaveBeenCalledWith(endpoint)
  })
})

describe.skip('autoscaleInit:failure', () => {
  let proxy
  const autoscaleConfig = {
    retryLimit: 3,
    retryDelay: 500
  }
  const initConfig = {
    host: 'localhost'
  }

  beforeEach(() => {
    jest.useFakeTimers()
    environment.fetch = jest.fn(() => {
      return new Promise(resolve => {
        resolve({
          status: 400,
          headers: {
            get: jest.fn(() => false)
          }
        })
      })
    })
  })

  afterEach(() => {
    environment.fetch.mockClear()
    environment.fetch.mockRestore()
  })

  it('should reject on retry limit', async () => {
    try {
      await autoscaleInit(proxy, autoscaleConfig, initConfig)
    } catch (e) {
      expect(req.default).toHaveBeenCalledTimes(autoscaleConfig.retryLimit)
    }
  })
})

describe('modifyInitConfigWithStreamManagerResponse', () => {
  const autoscaleConfig = {
    retryLimit: 3,
    retryDelay: 500,
    action: 'broadcast',
    protocol: 'https',
    host: 'sm.company.org',
    scope: 'live',
    apiVersion: '3.0',
    streamName: 'mystream'
  }
  const initConfig = {
    host: 'sm.company.org',
    app: 'live',
    streamName: 'mystream'
  }
  const smResponse = {
    serverAddress: '127.0.0.0',
    scope: '/live2',
    name: 'mystream1'
  }

  beforeEach(() => {
  })

  afterEach(() => {
  })

  it('should set connectionParams with single config and useProxy', () => {
    let aC = {...autoscaleConfig, useProxy: true}
    let iC = {...initConfig, protocol: 'wss', port: 8083}
    const result = modifyInitConfigWithStreamManagerResponse(iC, smResponse, aC)
    expect(result).toEqual({...iC,
      protocol: 'wss',
      port: 8083,
      host: aC.host,
      app: 'streammanager',
      streamName: smResponse.name,
      connectionParams: {
        host: smResponse.serverAddress,
        app: smResponse.scope.substr(1, smResponse.scope.length-1)
      }
    })
  })

  it('should set connectionParams with multiple config and useProxy', () => {
    let aC = {...autoscaleConfig, useProxy: true}
    let iC = {
      rtc: {...initConfig, protocol: 'wss', port: 8083},
      rtmp: initConfig
    }
    let rtcConfig = {...iC.rtc,
      protocol: 'wss',
      port: 8083,
      host: aC.host,
      app: 'streammanager',
      streamName: smResponse.name,
      connectionParams: {
        host: smResponse.serverAddress,
        app: smResponse.scope.substr(1, smResponse.scope.length-1)
      }
    }
    let rtmpConfig = {...iC.rtmp,
      host: smResponse.serverAddress,
      streamName: smResponse.name,
      app: smResponse.scope.substr(1, smResponse.scope.length-1)
    }
    const result = modifyInitConfigWithStreamManagerResponse(iC, smResponse, aC)
    expect(result).toEqual({...iC,
      rtc: rtcConfig,
      rtmp: rtmpConfig
    })
  })

  it('should not set connectionParams with single config and not useProxy', () => {
    let aC = {...autoscaleConfig, useProxy: false}
    let iC = {...initConfig, protocol: 'wss', port: 8083}
    const result = modifyInitConfigWithStreamManagerResponse(iC, smResponse, aC)
    expect(result).toEqual({...iC,
      protocol: 'wss',
      port: 8083,
      host: smResponse.serverAddress,
      app: smResponse.scope.substr(1, smResponse.scope.length-1),
      streamName: smResponse.name
    })
  })

  it('should not set connectionParams with multiple config and not useProxy', () => {
    let aC = {...autoscaleConfig, useProxy: false}
    let iC = {
      rtc: {...initConfig, protocol: 'wss', port: 8083},
      rtmp: initConfig
    }
    let rtcConfig = {...iC.rtc,
      protocol: 'wss',
      port: 8083,
      host: smResponse.serverAddress,
      app: smResponse.scope.substr(1, smResponse.scope.length-1),
      streamName: smResponse.name
    }
    let rtmpConfig = {...iC.rtmp,
      host: smResponse.serverAddress,
      streamName: smResponse.name,
      app: smResponse.scope.substr(1, smResponse.scope.length-1)
    }
    const result = modifyInitConfigWithStreamManagerResponse(iC, smResponse, aC)
    expect(result).toEqual({...iC,
      rtc: rtcConfig,
      rtmp: rtmpConfig
    })
  })

})
