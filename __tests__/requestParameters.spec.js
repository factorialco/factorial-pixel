import requestParameters from '../src/requestParameters'
import { JSDOM } from 'jsdom'

const html = "<!DOCTYPE html><html lang='en-es'></html>"
const dom = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

describe('requestParameters', () => {
  it('returns the data', () => {
    expect(requestParameters(dom.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en'
    })
  })
})
