import pixelUrl from './pixelUrl'

/**
 * `factorialPixelDomain` can be setup by the host this way
 * the cookie can be written in staging.factorialhr.com
 * for example
 */

const script = document.getElementById('factorial-pixel')
const customDomain = script ? script.getAttribute('data-domain') : null
const domain = customDomain || 'https://api.factorialhr.com'

const img = document.createElement('img')
img.src = `${domain}${pixelUrl(document)}`
img.width = 1
img.height = 1
img.style = 'display:none;'
document.body.appendChild(img)
