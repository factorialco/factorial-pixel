import pixelUrl from './pixelUrl'

/**
 * `factorialPixelDomain` can be setup by the host this way
 * the cookie can be written in staging.factorialhr.com
 * for example
 */

/* eslint-disable no-undef */
const domain = window.factorialPixelDomain || 'https://factorialhr.com'
/* eslint-enable no-undef */
const images = [domain, '']

images.forEach((imageDomain) => {
  const img = document.createElement('img')
  img.src = `${imageDomain}${pixelUrl(document)}`
  img.width = 1
  img.height = 1
  img.style = 'display:none;'
  document.body.appendChild(img)
})
