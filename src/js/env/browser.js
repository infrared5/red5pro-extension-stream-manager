import 'whatwg-fetch'

export default {
  /*
   * Returns existance of Red5 Pro SDK on window.
   */
  getRed5ProSDK: () => {
    return window.red5prosdk
  },

  /**
   * Returns existance of fetch APi on window.
   */
  fetch: window.fetch.bind(window)
}
