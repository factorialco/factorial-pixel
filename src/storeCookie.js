import Cookies from 'js-cookie'

export default (json) => {
  Object.keys(json).forEach((key) => {
    Cookies.set(key, json[key])
  })
}
