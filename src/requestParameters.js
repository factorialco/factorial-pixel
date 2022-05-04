function findPropertyInParams(params, property) {
  params.split('&').reduce((acc, param) => {
    const [key, value] = param.split('=')

    return { ...acc, [key]: value }
  }, {})[property]
}

export default function requestParameters(document) {
  const [path, params] = document.location.href.split('?')
  const landing = encodeURI(path)
  const locale = document.querySelector('html').lang.split('-')[0]
  const gclid = findPropertyInParams(params, 'gclid')

  return {
    language: locale,
    landingPage: landing,
    gclid,
  }
}
