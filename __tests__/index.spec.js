import { JSDOM } from 'jsdom'

const setGlobal = (name, value) => {
  Object.defineProperty(global, name, {
    value,
    configurable: true,
    writable: true
  })
}

describe('factorial-pixel', () => {
  afterEach(() => {
    setGlobal('document', undefined)
    setGlobal('navigator', undefined)
  })

  it('sends the pixel via sendBeacon when available', () => {
    const dom = new JSDOM("<!DOCTYPE html><html lang='en'></html>", {
      url: 'https://factorialhr.com/blog?gclid=123'
    })
    setGlobal('document', dom.window.document)
    setGlobal('navigator', { sendBeacon: jest.fn().mockReturnValue(true) })

    jest.resetModules()
    require('../src/index')

    expect(global.navigator.sendBeacon).toHaveBeenCalledTimes(1)
    expect(global.navigator.sendBeacon).toHaveBeenCalledWith(
      expect.stringContaining('https://factorialhr.com/api/attribution/pixel')
    )
    expect(global.document.body.querySelector('img')).toBeNull()
  })

  it('respects a custom data-domain with sendBeacon', () => {
    const dom = new JSDOM(
      "<!DOCTYPE html><html lang='en'><head><script id='factorial-pixel' data-domain='/api'></script></head></html>",
      { url: 'https://factorial.gr/get-started?gclid=123' }
    )
    setGlobal('document', dom.window.document)
    setGlobal('navigator', { sendBeacon: jest.fn().mockReturnValue(true) })

    jest.resetModules()
    require('../src/index')

    expect(global.navigator.sendBeacon).toHaveBeenCalledWith(
      expect.stringContaining('/api/attribution/pixel')
    )
    expect(global.navigator.sendBeacon).not.toHaveBeenCalledWith(
      expect.stringContaining('factorialhr.com')
    )
  })

  it('falls back to an <img> request when sendBeacon is unavailable', () => {
    const dom = new JSDOM("<!DOCTYPE html><html lang='en'></html>", {
      url: 'https://factorialhr.com/blog?gclid=123'
    })
    setGlobal('document', dom.window.document)
    setGlobal('navigator', {})

    jest.resetModules()
    require('../src/index')

    const img = global.document.body.querySelector('img')
    expect(img).not.toBeNull()
    expect(img.src).toContain('https://factorialhr.com/api/attribution/pixel')
  })
})
