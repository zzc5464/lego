;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<header class=\"_header\">\n    <slot></slot>\n</header>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-764855e9", module.exports)
  } else {
    hotAPI.update("_v-764855e9", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}