var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n.iconfont[_v-eec7c6f8] {\n    display: inline-block;\n    font-style: normal;\n    font-size: 16x;\n    width: 16px;\n    height: 16px;\n    background-color: #fe0;\n}\n")





module.exports = {
    data: function() {
        return {
            text: 'icon text'
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<i class=\"iconfont\" _v-eec7c6f8=\"\">hello</i>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n.iconfont[_v-eec7c6f8] {\n    display: inline-block;\n    font-style: normal;\n    font-size: 16x;\n    width: 16px;\n    height: 16px;\n    background-color: #fe0;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-eec7c6f8", module.exports)
  } else {
    hotAPI.update("_v-eec7c6f8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}