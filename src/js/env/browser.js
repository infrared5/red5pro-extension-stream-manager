import 'whatwg-fetch'

export default {
  getRed5ProSDK: () => {
    return window.red5prosdk
  },

  fetch: window.fetch.bind(window)
}
