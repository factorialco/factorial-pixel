import requestParameters from '../src/requestParameters'
import { JSDOM } from 'jsdom'

const html = "<!DOCTYPE html><html lang='en-es'></html>"
const dom = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

const domWithGclid = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?gclid=123',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

const domWithAclid = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?aclid=123',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

const domWithFbclid = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?fbclid=123',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

describe('requestParameters', () => {
  it('returns the data', () => {
    expect(requestParameters(dom.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en'
    })
  })

  it('returns the data with gclid', () => {
    expect(requestParameters(domWithGclid.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      gclid: '123'
    })
  })

  it('returns the data with aclid', () => {
    expect(requestParameters(domWithAclid.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      aclid: '123'
    })
  })

  it('returns the data with fbclid', () => {
    expect(requestParameters(domWithFbclid.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar'
    })
  })
})
