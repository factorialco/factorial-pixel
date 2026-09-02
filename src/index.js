import pixelUrl from './pixelUrl'

/**
 * `factorialPixelDomain` can be setup by the host this way
 * the cookie can be written in staging.factorialhr.com
 * for example
 */

const script = document.getElementById('factorial-pixel')
const customDomain = script ? script.getAttribute('data-domain') : null
const domain = customDomain || 'https://factorialhr.com/api'
const url = `${domain}${pixelUrl(document)}`

/**
 * `sendBeacon` guarantees the request is sent even if the page unloads right
 * after — an `<img>` request can be cancelled mid-flight by a fast
 * navigation (e.g. a visitor converting on a landing page a beat after
 * clicking through), silently dropping the attribution cookie. Falls back to
 * the `<img>` request only where `sendBeacon` isn't available.
 */
if (navigator.sendBeacon) {
  navigator.sendBeacon(url)
} else {
  const img = document.createElement('img')
  img.src = url
  img.width = 1
  img.height = 1
  img.style = 'display:none;'
  document.body.appendChild(img)
}
