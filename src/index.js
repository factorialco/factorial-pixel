import 'whatwg-fetch'
import pixelUrl from './pixelUrl'
import storeCookie from './storeCookie'

export default (document) => {
  const url = pixelUrl(document)

  return fetch(url)
    .then((response) => {
      return response.json()
    }).then((json) => {
      storeCookie(json)
    }).catch((ex) => {
      console.error(ex)
    })
}
