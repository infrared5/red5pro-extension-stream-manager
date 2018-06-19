/* global jest, describe, it, beforeEach, afterEach, expect */

import { Autoscale, Decorate, autoscaleInit } from '../../src/js/autoscale'
import * as req from '../../src/js/autoscale/request'
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

  it('should contain query params for connection and accessToken', async () => {
    const token = 'abc123'
    const url = 'http://foobar?baz=quo'
    const encodedURL = encodeURIComponent(url)
    const endpoint = `https://sm.company.org/streammanager/api/3.0/event/live/mystream?action=broadcast&validation_url=${encodedURL}&accessToken=${token}`
    await req.default({...autoscaleConfig,
      connectionParams: {
        validation_url: url
      },
      accessToken: token
    })
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
