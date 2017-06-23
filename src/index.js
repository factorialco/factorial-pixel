import pixelUrl from './pixelUrl'

const img = document.createElement('img')
img.src = pixelUrl(document)
document.body.appendChild(img)
