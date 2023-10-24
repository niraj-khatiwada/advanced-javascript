import corsProxy from 'cors-anywhere'

const host = process.env.HOST || '127.0.0.1'
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080

corsProxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2', 'x-cookie'],
  })
  .listen(port, host, function () {
    console.log('Cors proxy server running on ' + host + ':' + port)
  })
