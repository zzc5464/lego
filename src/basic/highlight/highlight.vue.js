var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")





module.exports = {
    data: function() {
        return {
            text: 'highlight text'
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<span _v-eeafffe4=\"\">{{ text }}</span>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-eeafffe4", module.exports)
  } else {
    hotAPI.update("_v-eeafffe4", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}