/* global describe, it, beforeEach, afterEach, expect */
import {
  modifyInitConfigWithStreamManagerResponse
} from '../../src/js/autoscale/util'

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

  it('should assign socketParams to HLS subscriber with useProxy', () => {
    let aC = {...autoscaleConfig, useProxy: true}
    let iC = {
      rtc: {...initConfig, protocol: 'wss', port: 8083},
      rtmp: {...initConfig, protocol: 'rtmp', port: 1935},
      hls: {...initConfig, protocol: 'https', port: 443}
    }
    let rtcConfig = {...iC.rtc,
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
    let hlsConfig = {...iC.hls,
      host: smResponse.serverAddress,
      app: smResponse.scope.substr(1, smResponse.scope.length-1),
      streamName: smResponse.name,
      connectionParams: {
        host: smResponse.serverAddress,
        app: smResponse.scope.substr(1, smResponse.scope.length-1)
      },
      socketParams: {
        protocol: 'wss',
        host: aC.host,
        app: 'streammanager'
      }
    }
    const result = modifyInitConfigWithStreamManagerResponse(iC, smResponse, aC)
    expect(result).toEqual({...iC,
      rtc: rtcConfig,
      rtmp: rtmpConfig,
      hls: hlsConfig
    })

  })
})
