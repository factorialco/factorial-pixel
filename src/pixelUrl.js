import requestParameters from './requestParameters'

export default document => {
  const { language, landingPage, gclid, aclid, fbclid } = requestParameters(
    document
  )
  const mc = document.location.href.match(/mc=(.*)/)
  const attributes = [
    `mc=${mc ? mc[1] : ''}`,
    `referer=${encodeURI(document.referrer)}`,
    `language=${language}`,
    `landing_page=${landingPage}`
  ]

  if (gclid) {
    attributes.push(`gclid=${gclid}`)
  }
  if (aclid) {
    attributes.push(`aclid=${aclid}`)
  }
  if (fbclid) {
    attributes.push(`fbclid=${fbclid}`)
  }

  return `/internal/pixel?${attributes.join('&')}`
}
