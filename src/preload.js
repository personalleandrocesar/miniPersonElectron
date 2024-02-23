
const { net } = require('electron')
const { URL } = require('url')

const preloadSite = async (url) => {
  try {
    const response = await net.request({ method: 'GET', url })
    if (response.statusCode === 200) {
      console.log('Site preloaded successfully')
    } else {
      console.error('Failed to preload site')
    }
  } catch (error) {
    console.error('Failed to preload site:', error)
  }
}

preloadSite('https://leandrocesar.com')

