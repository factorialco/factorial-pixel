import requestParameters from './requestParameters'

export default (document) => {
  const { language, landingPage } = requestParameters(document)
  const mc = document.location.href.match(/mc=(.*)/)
  const attributes = [
    `mc=${mc ? mc[1] : ''}`,
    `referer=${encodeURI(document.referrer)}`,
    `language=${language}`,
    `landing_page=${landingPage}`
  ].join('&')

  // We need to set the cookie to the app domain, so we see it everywhere.
  const appDomain = document.location.origin.replace(/(.*factorialhr\.)(.*)$/, '$1com')
  return `${appDomain}/internal/pixel?${attributes}`
}
