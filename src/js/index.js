/**
 * Main entry of Stream Manager Extension for Red5 Pro HTML SDK, accessible on the `window` global at `red5prosdk_ext_stream_manager`.
 *
 * @file red5pro-ext-stream-manager.min.js
 * @module red5prosdk_ext_stream_manager
 *
 * @example
 * <!doctype html>
 * <html>
 *   <head>
 *     <!-- *Recommended WebRTC Shim -->
 *     <script src="http://webrtc.github.io/adapter/adapter-latest.js"></script>
 *   </head>
 *   <body>
 *     <!-- video containers -->
 *     <!-- publisher -->
 *     <div>
 *       <video id="red5pro-publisher" width="640" height="480" muted autoplay playsinline></video>
 *     </div>
 *     <!-- subscriber -->
 *     <div>
 *       <video id="red5pro-subscriber" width="640" height="480" controls autoplay playsinline></video>
 *     </div>
 *     <!-- Red5 Pro SDK -->
 *     <script src="lib/red5pro/red5pro-sdk.min.js"></script>
 *     <script src="lib/red5pro/red5pro-ext-stream-manager.js"></script>
 *     <!-- Create Pub/Sub with Stream Manager support-->
 *     <script>
 *       (function(red5prosdk, sm_ext) {
 *         'use strict';
 *         red5prosdk.setLogLevel('debug');
 *         sm_ext.setLogLevel('debug');
 * 
 *         // Extend the Red5Pro sdk.
 *         sm_ext.decorate();
 * 
 *         var rtcPublisher = new red5prosdk.RTCPublisher();
 *         var rtcSubscriber = new red5prosdk.RTCSubscriber();
 * 
 *         var autoscaleConfig = {
 *           protocol: 'https',
 *           host: 'streammanager.company.org',
 *           streamName: 'mystream',
 *           scope: 'live',
 *           apiVersion: '3.0',
 *           useProxy: true
 *         };
 * 
 *         var initConfig = {
 *           protocol: 'wss',
 *           host: 'streammanager.company.org',
 *           port: 8083:,
 *           app: 'live',
 *           streamName: 'mystream',
 *           iceServers: [{urls: 'stun:stun2.l.google.com:19302'}]
 *         };
 * 
 *         var publishAutoscaleConfig = Object.assign({}, autoscaleConfig, {
 *           action: 'broadcast'
 *         });
 *         var subscribeAutoscaleConfig = Object.assign({}, autoscaleConfig, {
 *           action: 'subscribe'
 *         });
 * 
 *         function subscribe () {
 *           rtcSubscriber
 *             .autoscale(subscribeAutoscaleConfig, initConfig)
 *             .then(function () {
 *               return rtcSubscriber.subscribe();
 *             })
 *             .catch(function (error) {
 *               console.error('Could not play: ' + error);
 *             });
 *         }
 * 
 *         // First connect Autoscale-d Publisher.
 *         rtcPublisher
 *           .autoscale(publishAutoscaleConfig, initConfig)
 *           .then(function () {
 *             // Once publishing, we will start the Autoscale-d Subscriber.
 *             rtcPublisher.on(red5prosdk.PublisherEventTypes.PUBLISH_START, subscribe);
 *             return rtcPublisher.publish();
 *           })
 *           .catch(function (error) {
 *             console.error('Could not publish: ' + error)
 *           });
 * 
 *       }(window.red5prosdk, window.red5prosdk_ext_stream_manager));
 *     </script>
 *   </body>
 * </html>
 */

// SDK_VERSION, LOG_LEVEL injected from webpack build.
import { LEVELS, establishLogger } from './log'
import { getLogger as _getLogger } from './log'
import environment from './env/browser'
import { Autoscale, Decorate } from './autoscale'

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

/**
 * Decorates the publisher and subscriber classes exposed on the Red5 Pro HTML SDK.
 * This allows for ease in calling autoscale with a familiar init and Promise-like flow.
 * @example
 * red5prosdk_ext_stream_manager.decorate()
 * new red5prosdk.Red5ProPublisher()
 *   .setPublishOrder(['rtc', 'rtmp'])
 *   .autoscale(autoscaleConfig, config)
 *   .then(function (publisher) {
 *     return publisher.publish()
 *   })
 *   .catch(function (error) {
 *     // handle error.
 *   });
*/
export const decorate = () => {
  const red5prosdk = environment.getRed5ProSDK()
  if (red5prosdk) {
    const {
      Red5ProSubscriber,
      RTCSubscriber,
      HLSSubscriber,
      RTMPSubscriber,
      Red5ProPublisher,
      RTCPublisher,
      RTMPPublisher
    } = red5prosdk
    Decorate(Red5ProSubscriber)
    Decorate(RTCSubscriber)
    Decorate(HLSSubscriber)
    Decorate(RTMPSubscriber)
    Decorate(Red5ProPublisher)
    Decorate(RTCPublisher)
    Decorate(RTMPPublisher)
  } else {
    getLogger().warn('Could not decorate the red5prosdk global. It does not exist.')
  }
}

/**
 * Returns the top-level decorator function.
 * You would pass in an already created instance of your desired publisher or subscriber.
 *
 * @example
 * var failover = new red5prosdk.Red5ProPublisher().setPublishOrder(['rtc', 'rtmp'])
 * Autoscale(failover).init(autoscaleConfig, initConfig)
 *   .then(function (publisher) {
 *     return publisher.publish()
 *   })
 *   .catch(function (error) {
 *     // handle error.
 *   });
 */
export { Autoscale }
