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

const domWithUtms = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?utm_source=google&utm_medium=cpc&utm_campaign=Q1_Brand&utm_content=ad_variant_1&utm_term=hr_software',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

const domWithHsa = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?hsa_cam=123456&hsa_grp=789012&hsa_ad=345678&hsa_src=google&hsa_mt=exact&hsa_kw=hr_software&hsa_tgt=901234',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

const domWithTtclid = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?ttclid=tt_click_123',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

const domWithLiFatId = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?li_fat_id=li_click_456',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

const domWithTwclid = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?twclid=tw_click_789',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

const domWithRdtCid = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?rdt_cid=rd_click_012',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

const domWithTblci = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?tblci=tb_click_345',
  referrer: 'https://google.com?query=cómo hacer nóminas'
})

const domWithPlacement = new JSDOM(html, {
  url: 'https://factorialhr.com/team/césar?placement=feed',
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
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      fbclid: '123'
    })
  })

  it('returns the data with UTM parameters', () => {
    expect(requestParameters(domWithUtms.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      utm_source: 'google',
      utm_medium: 'cpc',
      utm_campaign: 'Q1_Brand',
      utm_content: 'ad_variant_1',
      utm_term: 'hr_software'
    })
  })

  it('returns the data with HSA parameters', () => {
    expect(requestParameters(domWithHsa.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      hsa_ad: '345678',
      hsa_cam: '123456',
      hsa_grp: '789012',
      hsa_kw: 'hr_software',
      hsa_mt: 'exact',
      hsa_src: 'google',
      hsa_tgt: '901234'
    })
  })

  it('returns the data with ttclid', () => {
    expect(requestParameters(domWithTtclid.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      ttclid: 'tt_click_123'
    })
  })

  it('returns the data with li_fat_id', () => {
    expect(requestParameters(domWithLiFatId.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      li_fat_id: 'li_click_456'
    })
  })

  it('returns the data with twclid', () => {
    expect(requestParameters(domWithTwclid.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      twclid: 'tw_click_789'
    })
  })

  it('returns the data with rdt_cid', () => {
    expect(requestParameters(domWithRdtCid.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      rdt_cid: 'rd_click_012'
    })
  })

  it('returns the data with tblci', () => {
    expect(requestParameters(domWithTblci.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      tblci: 'tb_click_345'
    })
  })

  it('returns the data with placement', () => {
    expect(requestParameters(domWithPlacement.window.document)).toEqual({
      landingPage: 'https://factorialhr.com/team/c%25C3%25A9sar',
      language: 'en',
      placement: 'feed'
    })
  })
})
