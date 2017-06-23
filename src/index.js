import pixelUrl from './pixelUrl'
import storeCookie from './storeCookie'

const img = document.createElement('img')
img.src = pixelUrl(document)
document.body.appendChild(img)
