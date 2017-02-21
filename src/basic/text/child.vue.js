var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\n\n")
'use strict';

module.exports = {
    props: ['time', 'wenben'],
    data: function data() {
        return {
            times: this.time + 1,
            texts: this.wenben
        };
    }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"child\" _v-2ee49dd5=\"\">\n    <slot _v-2ee49dd5=\"\"></slot>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\n\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-2ee49dd5", module.exports)
  } else {
    hotAPI.update("_v-2ee49dd5", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}