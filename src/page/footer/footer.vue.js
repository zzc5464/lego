;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<footer class=\"footer\">\n    <slot></slot>\n</footer>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-e95d6bae", module.exports)
  } else {
    hotAPI.update("_v-e95d6bae", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}