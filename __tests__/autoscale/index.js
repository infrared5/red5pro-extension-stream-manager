/* global jest, describe, it, beforeEach, afterEach, expect */

import { Autoscale, Decorate, autoscaleInit } from '../../src/js/autoscale'
import * as request from '../../src/js/autoscale/request'
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

describe('autoscaleInit', () => {
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
    proxy = new Object()
    request.default = jest.fn(() => {
      new Promise((resolve, reject) => {
        console.log('nope')
        reject('uh-oh')
      })
    })
  })

  afterEach(() => {
    proxy = undefined
    request.default.mockClear()
    request.default.mockRestore()
  })

  it('should reject on retry limit', async () => {
    try {
      let p = await autoscaleInit(proxy, autoscaleConfig, initConfig)
    } catch (e) {
      console.log(e)
      expect(request.default.mock.calls.length).toEqual(autoscaleConfig.retryLimit)
    }
  })
})
