// @flow
import Cookie from 'js-cookie'

export default (json: any) => {
  Object.keys(json).forEach((key) => {
    Cookies.set(key, json[key])
  })
}
