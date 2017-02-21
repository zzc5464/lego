var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\nspan[_v-6acbb9f8] {\n    font-size: 30px;\n    color: #f00;\n}\n")





module.exports = {
    data: function() {
        return {
            text: 'skeleton text'
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<span _v-6acbb9f8=\"\">{{ text }}</span>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\nspan[_v-6acbb9f8] {\n    font-size: 30px;\n    color: #f00;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-6acbb9f8", module.exports)
  } else {
    hotAPI.update("_v-6acbb9f8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}