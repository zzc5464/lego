var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\nsvg[_v-6894e2a4] {\n    display: block;\n    border: 1px solid #f00;\n    width: 50px;\n    height: 50px;\n}\n")





module.exports = {
    data: function() {
        return {
            text: 'svg text'
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<svg src=\"\" preload=\"\" _v-6894e2a4=\"\"></svg>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\nsvg[_v-6894e2a4] {\n    display: block;\n    border: 1px solid #f00;\n    width: 50px;\n    height: 50px;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-6894e2a4", module.exports)
  } else {
    hotAPI.update("_v-6894e2a4", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}