function findPropertyInParams (params = '', property) {
  const acc = {}

  params.split('&').forEach(param => {
    const [key, value] = param.split('=')

    acc[key] = value
  })

  return acc[property]
}

export default function requestParameters (document) {
  const path = document.location.origin + document.location.pathname
  const search = document.location.search.substring(1)
  const landing = encodeURI(path)
  const locale = document.querySelector('html').lang.split('-')[0]
  const mc = findPropertyInParams(search, 'mc')
  const gclid = findPropertyInParams(search, 'gclid')
  const aclid = findPropertyInParams(search, 'aclid')
  const fbclid = findPropertyInParams(search, 'fbclid')
  const utm_source = findPropertyInParams(search, 'utm_source')
  const utm_medium = findPropertyInParams(search, 'utm_medium')
  const utm_campaign = findPropertyInParams(search, 'utm_campaign')
  const utm_content = findPropertyInParams(search, 'utm_content')
  const utm_term = findPropertyInParams(search, 'utm_term')
  const hsa_ad = findPropertyInParams(search, 'hsa_ad')
  const hsa_cam = findPropertyInParams(search, 'hsa_cam')
  const hsa_grp = findPropertyInParams(search, 'hsa_grp')
  const hsa_kw = findPropertyInParams(search, 'hsa_kw')
  const hsa_mt = findPropertyInParams(search, 'hsa_mt')
  const hsa_src = findPropertyInParams(search, 'hsa_src')
  const hsa_tgt = findPropertyInParams(search, 'hsa_tgt')

  return {
    language: locale,
    landingPage: landing,
    mc,
    gclid,
    aclid,
    fbclid,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
    hsa_ad,
    hsa_cam,
    hsa_grp,
    hsa_kw,
    hsa_mt,
    hsa_src,
    hsa_tgt
  }
}
