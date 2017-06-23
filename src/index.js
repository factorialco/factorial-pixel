import pixelUrl from './pixelUrl'

const img = document.createElement('img')
img.src = pixelUrl(document)
img.width = 1
img.height = 1
img.style = "border-style:none;"
document.body.appendChild(img)
