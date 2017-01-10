/* eslint-disable */

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage
  var shim = new LocalStorage('./scratch')
}
export default shim || localStorage
