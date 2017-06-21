import requestParameters from './requestParameters'

export default (document) => {
  const protocol = document.location.protocol

  // Insert `.com` mega hackish
  const hostParts = document.location.host.split('.')
  const index = hostParts.findIndex((part) => {
    return part.match(/factorial/)
  })
  hostParts.splice(index + 1, 999, 'com')
  const newOrigin = `${protocol}//${hostParts.join('.')}`

  const { language, landingPage } = requestParameters(document)
  const mc = document.location.href.match(/mc=(.*)/)
  const attributes = [
    `mc=${mc ? mc[1] : ''}`,
    `referer=${document.referrer}`,
    `language=${language}`,
    `landing_page=${landingPage}`
  ].join('&')

  return `${newOrigin}/api/internal/pixel?${attributes}`
}
