import 'whatwg-fetch'
import pixelUrl from './pixelUrl'
import storeCookie from './storeCookie'

export default (document, host) => {
  const url = pixelUrl(document, host)

  return fetch(url, { credentials: 'include' })
    .then((response) => {
      return response.json()
    }).then((json) => {
      storeCookie(json)
    }).catch((ex) => {
      console.error(ex)
    })
}
