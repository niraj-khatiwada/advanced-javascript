if (self.Worker) {
  self.setTimeout(() => {
    self.postMessage('COMPLETE')
  }, 3000)
}
