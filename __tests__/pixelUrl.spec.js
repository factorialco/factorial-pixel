import pixelUrl from '../src/pixelUrl'
import { JSDOM } from 'jsdom'

let html
let dom
let host

describe('pixelUrl', () => {
  describe('english and no subdomain', () => {
    it('returns the data', () => {
      html = "<!DOCTYPE html><html lang='en-es'></html>"
      host = 'factorialhr.com'
      dom = new JSDOM(html, {
        url: 'https://factorialhr.com/blog?mc=123',
        referrer: 'https://google.com'
      })
      expect(pixelUrl(dom.window.document, host)).toEqual('https://factorialhr.com/api/internal/pixel?mc=123&referer=https://google.com/&language=en&landing_page=https://factorialhr.com/blog')
    })
  })

  describe('spanish and subdomain', () => {
    it('returns the data', () => {
      html = "<!DOCTYPE html><html lang='es'></html>"
      host = 'staging.factorialhr.com'
      dom = new JSDOM(html, {
        url: 'https://staging.factorialhr.es/blog'
      })
      expect(pixelUrl(dom.window.document, host)).toEqual('https://staging.factorialhr.com/api/internal/pixel?mc=&referer=&language=es&landing_page=https://staging.factorialhr.es/blog')
    })
  })
})
