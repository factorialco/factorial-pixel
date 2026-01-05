import requestParameters from './requestParameters'

export default document => {
  const { language, landingPage, mc, gclid, aclid, fbclid, utm_source, utm_medium, utm_campaign, utm_content, utm_term } = requestParameters(
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
  if (utm_source) {
    attributes.push(`utm_source=${encodeURIComponent(utm_source)}`)
  }
  if (utm_medium) {
    attributes.push(`utm_medium=${encodeURIComponent(utm_medium)}`)
  }
  if (utm_campaign) {
    attributes.push(`utm_campaign=${encodeURIComponent(utm_campaign)}`)
  }
  if (utm_content) {
    attributes.push(`utm_content=${encodeURIComponent(utm_content)}`)
  }
  if (utm_term) {
    attributes.push(`utm_term=${encodeURIComponent(utm_term)}`)
  }

  return `/internal/pixel?${attributes.join('&')}`
}
