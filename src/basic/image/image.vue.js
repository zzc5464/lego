var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\nimg[_v-64bddec8] {\n    display: block;\n    border: none;\n    width: 30px;\n    height: 30px;\n    background-color: #f5dede;\n}\n")





module.exports = {
    data: function() {
        return {
            text: 'image text'
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<img src=\"\" preload=\"\" _v-64bddec8=\"\">\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\nimg[_v-64bddec8] {\n    display: block;\n    border: none;\n    width: 30px;\n    height: 30px;\n    background-color: #f5dede;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-64bddec8", module.exports)
  } else {
    hotAPI.update("_v-64bddec8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}