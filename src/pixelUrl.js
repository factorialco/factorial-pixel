import requestParameters from './requestParameters'

export default (document) => {
  const { language, landingPage, gclid } = requestParameters(document)
  const mc = document.location.href.match(/mc=(.*)/)
  const attributes = [
    `mc=${mc ? mc[1] : ''}`,
    `referer=${encodeURI(document.referrer)}`,
    `language=${language}`,
    `landing_page=${landingPage}`,
    `gclid=${gclid}`,
  ].join('&')

  return `/internal/pixel?${attributes}`
}
