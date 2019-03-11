export default function requestParameters (document) {
  const landing = encodeURI(document.location.href.split('?')[0])
  const locale = document.querySelector('html').lang.split('-')[0]

  return {
    language: locale,
    landingPage: landing
  }
}
