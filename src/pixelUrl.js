// @flow
import requestParameters from './requestParameters'
import parseDomain from 'parse-domain'

export default (document: any) => {
  const protocol = document.location.protocol
  const host = document.location.host
  const { subdomain, domain } = parseDomain(host)

  let newOrigin
  if (subdomain === '') {
    newOrigin = `${protocol}//${domain}.com`
  } else {
    newOrigin = `${protocol}//${subdomain}.${domain}.com`
  }

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
