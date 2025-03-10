export default function requestParameters (document) {
  const { search, origin, pathname } = document.location

  const params = new URLSearchParams(search)
  const path = origin + pathname
  const landing = encodeURI(path)
  const locale = document.querySelector('html').lang.split('-')[0]

  function getParam (param) {
    const value = params.get(param)
    return value === null ? undefined : value
  }

  const gclid = getParam('gclid')
  const aclid = getParam('aclid')
  const fbclid = getParam('fbclid')

  return {
    language: locale,
    landingPage: landing,
    gclid,
    aclid,
    fbclid
  }
}
