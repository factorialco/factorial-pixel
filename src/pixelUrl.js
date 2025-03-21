import requestParameters from './requestParameters'

export default document => {
  const { language, landingPage, mc, gclid, aclid, fbclid } = requestParameters(
    document
  )
  const attributes = [
    `mc=${mc || ''}`,
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
