;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<aside class=\"_presentation\">\n    <slot></slot>\n</aside>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-7d928689", module.exports)
  } else {
    hotAPI.update("_v-7d928689", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}