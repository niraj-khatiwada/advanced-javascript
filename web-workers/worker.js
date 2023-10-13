// window is not available inside worker threads. Instead we can use `self`
// Fun fact, self = window in main threads. You can use `self` variable instead of window as well in main thread.

if (self.Worker) {
  onmessage = function (event) {
    console.log('Message received by worker:', event?.data)
    self.setTimeout(() => {
      self.postMessage({ target: 'custom-worker', success: true })
    }, 3000)
  }
}
