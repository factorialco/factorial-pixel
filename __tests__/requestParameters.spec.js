import requestParameters from '../src/requestParameters'
import { JSDOM } from 'jsdom'

const html = "<!DOCTYPE html><html lang='en-es'></html>"
const dom = new JSDOM(html, {
  url: 'https://factorialhr.com',
  referrer: 'https://google.com'
})

describe('requestParameters', () => {
  it('returns the data', () => {
    expect(requestParameters(dom.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/',
      language: 'en'
    })
  })
})
