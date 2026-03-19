import requestParameters from './requestParameters'

export default document => {
  const { language, landingPage, mc, gclid, aclid, fbclid, ttclid, li_fat_id, twclid, rdt_cid, tblci, utm_source, utm_medium, utm_campaign, utm_content, utm_term, hsa_ad, hsa_cam, hsa_grp, hsa_kw, hsa_mt, hsa_src, hsa_tgt, placement } = requestParameters(
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
  if (ttclid) {
    attributes.push(`ttclid=${ttclid}`)
  }
  if (li_fat_id) {
    attributes.push(`li_fat_id=${li_fat_id}`)
  }
  if (twclid) {
    attributes.push(`twclid=${twclid}`)
  }
  if (rdt_cid) {
    attributes.push(`rdt_cid=${rdt_cid}`)
  }
  if (tblci) {
    attributes.push(`tblci=${tblci}`)
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
  if (hsa_ad) {
    attributes.push(`hsa_ad=${encodeURIComponent(hsa_ad)}`)
  }
  if (hsa_cam) {
    attributes.push(`hsa_cam=${encodeURIComponent(hsa_cam)}`)
  }
  if (hsa_grp) {
    attributes.push(`hsa_grp=${encodeURIComponent(hsa_grp)}`)
  }
  if (hsa_kw) {
    attributes.push(`hsa_kw=${encodeURIComponent(hsa_kw)}`)
  }
  if (hsa_mt) {
    attributes.push(`hsa_mt=${encodeURIComponent(hsa_mt)}`)
  }
  if (hsa_src) {
    attributes.push(`hsa_src=${encodeURIComponent(hsa_src)}`)
  }
  if (hsa_tgt) {
    attributes.push(`hsa_tgt=${encodeURIComponent(hsa_tgt)}`)
  }
  if (placement) {
    attributes.push(`placement=${encodeURIComponent(placement)}`)
  }

  return `/internal/pixel?${attributes.join('&')}`
}
