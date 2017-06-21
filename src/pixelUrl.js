import requestParameters from './requestParameters'

export default (document, host) => {
  const protocol = document.location.protocol

  const { language, landingPage } = requestParameters(document)
  const mc = document.location.href.match(/mc=(.*)/)
  const attributes = [
    `mc=${mc ? mc[1] : ''}`,
    `referer=${document.referrer}`,
    `language=${language}`,
    `landing_page=${landingPage}`
  ].join('&')

  return `${protocol}//${host}/api/internal/pixel?${attributes}`
}
