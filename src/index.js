import 'whatwg-fetch'
import pixelUrl from './pixelUrl'
import storeCookie from './storeCookie'

document.addEventListener('DOMContentLoaded', () => {
  const url = pixelUrl(document)

  return fetch(url, { credentials: 'include' })
    .then((response) => {
      return response.json()
    }).then((json) => {
      storeCookie(json)
    }).catch((ex) => {
      console.error(ex)
    })
})
