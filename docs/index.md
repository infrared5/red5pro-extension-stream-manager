# Red5 Pro HTML5 SDK

> [Download the latest release](https://account.red5pro.com/download)

# Quickstart

```html
<!doctype html>
<html>
  <head>
    <!-- *Recommended WebRTC Shim -->
    <script src="http://webrtc.github.io/adapter/adapter-latest.js"></script>
  </head>
  <body>
    <!-- video containers -->
    <!-- publisher -->
    <div>
      <video id="red5pro-publisher" width="640" height="480" muted autoplay playsinline></video>
    </div>
    <!-- subscriber -->
    <div>
      <video id="red5pro-subscriber" width="640" height="480" controls autoplay playsinline></video>
    </div>
    <!-- Red5 Pro SDK -->
    <script src="lib/red5pro/red5pro-sdk.min.js"></script>
    <script src="lib/red5pro/red5pro-ext-stream-manager.js"></script>
    <!-- Create Pub/Sub with Stream Manager support-->
    <script>
      (function(red5prosdk, sm_ext) {
        'use strict';
        red5prosdk.setLogLevel('debug');
        sm_ext.setLogLevel('debug');

        // Extend the Red5Pro sdk.
        sm_ext.decorate();

        var rtcPublisher = new red5prosdk.RTCPublisher();
        var rtcSubscriber = new red5prosdk.RTCSubscriber();

        var autoscaleConfig = {
          protocol: 'https',
          host: 'streammanager.company.org',
          streamName: 'mystream',
          scope: 'live',
          apiVersion: '3.0',
          useProxy: true
        };

        var initConfig = {
          protocol: 'wss',
          host: 'streammanager.company.org',
          port: 8083:,
          app: 'live',
          streamName: 'mystream',
          iceServers: [{urls: 'stun:stun2.l.google.com:19302'}]
        };

        var publishAutoscaleConfig = Object.assign({}, autoscaleConfig, {
          action: 'broadcast'
        });
        var subscribeAutoscaleConfig = Object.assign({}, autoscaleConfig, {
          action: 'subscribe'
        });

        function subscribe () {
          rtcSubscriber
            .autoscale(subscribeAutoscaleConfig, initConfig)
            .then(function () {
              return rtcSubscriber.subscribe();
            })
            .catch(function (error) {
              console.error('Could not play: ' + error);
            });
        }

        // First connect Autoscale-d Publisher.
        rtcPublisher
          .autoscale(publishAutoscaleConfig, initConfig)
          .then(function () {
            // Once publishing, we will start the Autoscale-d Subscriber.
            rtcPublisher.on(red5prosdk.PublisherEventTypes.PUBLISH_START, subscribe);
            return rtcPublisher.publish();
          })
          .catch(function (error) {
            console.error('Could not publish: ' + error)
          });

      }(window.red5prosdk, window.red5prosdk_ext_stream_manager));
    </script>
  </body>
</html>
```

# Requirements
The **Red5 Pro HTML SDK** is intended to communicate with a [Red5 Pro Server](https://www.red5pro.com/), which allows for broadcasting and consuming live streams utilizing [WebRTC](https://developer.mozilla.org/en-US/docs/Web/Guide/API/WebRTC) and other protocols, including [RTMP](https://en.wikipedia.org/wiki/Real_Time_Messaging_Protocol) and [HLS](https://en.wikipedia.org/wiki/HTTP_Live_Streaming).

A **Red5 Pro Server** can be deployed to allow for autoscaling on cloud platforms (such as [Amazon Web Services](https://www.red5pro.com/docs/server/awsinstall/)). In such a scenario, the [Stream Manager API](https://www.red5pro.com/docs/autoscale/) is used by client-side webapps to access endpoints for Origins and Edges.

With the **Red5Pro Stream Manager Extension** the communication with the **Stream Manager** is simplified and abstracted to allow for a familar client-side API which will handle accessing and configuring publishers and subscribers to stream on Origins and Edges, respectively.

> **[Click here to start using the Red5 Pro Server today!](https://account.red5pro.com/login)**

