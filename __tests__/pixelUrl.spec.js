import pixelUrl from '../src/pixelUrl'
import { JSDOM } from 'jsdom'

let html
let dom

describe('pixelUrl', () => {
  describe('english and no subdomain', () => {
    it('returns the data', () => {
      html = "<!DOCTYPE html><html lang='en-es'></html>"
      dom = new JSDOM(html, {
        url: 'https://factorialhr.com/blog?mc=123',
        referrer: 'https://google.com?query=cómo hacer nóminas'
      })
      expect(pixelUrl(dom.window.document)).toEqual(
        '/internal/pixel?mc=123&referer=https://google.com/?query=c%25C3%25B3mo%2520hacer%2520n%25C3%25B3minas&language=en&landing_page=https://factorialhr.com/blog'
      )
    })
  })

  describe('spanish and subdomain', () => {
    it('returns the data', () => {
      html = "<!DOCTYPE html><html lang='es'></html>"
      dom = new JSDOM(html, {
        url: 'https://staging.factorialhr.es/blog'
      })
      expect(pixelUrl(dom.window.document)).toEqual(
        '/internal/pixel?mc=&referer=&language=es&landing_page=https://staging.factorialhr.es/blog'
      )
    })
  })

  describe('with gclid', () => {
    it('returns the data', () => {
      html = "<!DOCTYPE html><html lang='es'></html>"
      dom = new JSDOM(html, {
        url: 'https://staging.factorialhr.es/blog?gclid=123'
      })
      expect(pixelUrl(dom.window.document)).toEqual(
        '/internal/pixel?mc=&referer=&language=es&landing_page=https://staging.factorialhr.es/blog&gclid=123'
      )
    })
  })

  describe('with aclid', () => {
    it('returns the data', () => {
      html = "<!DOCTYPE html><html lang='es'></html>"
      dom = new JSDOM(html, {
        url: 'https://staging.factorialhr.es/blog?aclid=123'
      })
      expect(pixelUrl(dom.window.document)).toEqual(
        '/internal/pixel?mc=&referer=&language=es&landing_page=https://staging.factorialhr.es/blog&aclid=123'
      )
    })
  })

  describe('with fbclid', () => {
    it('returns the data', () => {
      html = "<!DOCTYPE html><html lang='es'></html>"
      dom = new JSDOM(html, {
        url: 'https://staging.factorialhr.es/blog?fbclid=123'
      })
      expect(pixelUrl(dom.window.document)).toEqual(
        '/internal/pixel?mc=&referer=&language=es&landing_page=https://staging.factorialhr.es/blog&fbclid=123'
      )
    })
  })

  describe('with UTM parameters', () => {
    it('returns the data with all UTM params', () => {
      html = "<!DOCTYPE html><html lang='en'></html>"
      dom = new JSDOM(html, {
        url: 'https://factorialhr.com/blog?utm_source=google&utm_medium=cpc&utm_campaign=Q1_Brand&utm_content=ad_1&utm_term=hr_software'
      })
      expect(pixelUrl(dom.window.document)).toEqual(
        '/internal/pixel?mc=&referer=&language=en&landing_page=https://factorialhr.com/blog&utm_source=google&utm_medium=cpc&utm_campaign=Q1_Brand&utm_content=ad_1&utm_term=hr_software'
      )
    })

    it('encodes UTM parameters with special characters', () => {
      html = "<!DOCTYPE html><html lang='en'></html>"
      dom = new JSDOM(html, {
        url: 'https://factorialhr.com/blog?utm_source=google&utm_campaign=Q1%20Brand%20Campaign&utm_content=ad%20%231'
      })
      expect(pixelUrl(dom.window.document)).toEqual(
        '/internal/pixel?mc=&referer=&language=en&landing_page=https://factorialhr.com/blog&utm_source=google&utm_campaign=Q1%2520Brand%2520Campaign&utm_content=ad%2520%25231'
      )
    })

    it('combines UTMs with gclid', () => {
      html = "<!DOCTYPE html><html lang='en'></html>"
      dom = new JSDOM(html, {
        url: 'https://factorialhr.com/blog?utm_source=google&utm_medium=cpc&utm_campaign=Q1&gclid=test_click_123'
      })
      expect(pixelUrl(dom.window.document)).toEqual(
        '/internal/pixel?mc=&referer=&language=en&landing_page=https://factorialhr.com/blog&gclid=test_click_123&utm_source=google&utm_medium=cpc&utm_campaign=Q1'
      )
    })
  })
})
