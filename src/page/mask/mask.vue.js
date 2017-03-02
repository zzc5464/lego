;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<aside class=\"_mask\">\n    <slot></slot>\n</aside>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-2ce662c9", module.exports)
  } else {
    hotAPI.update("_v-2ce662c9", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}