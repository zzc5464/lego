




module.exports = {
    props: [ 'size' ],

    data: function() {

        var list = [];

        this.color
        && list.push('_text_color_' + this.color);

        return {
            classObj: list
        };
    }
}  

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<span class=\"_highlight\" :class=\"classObj\"><slot></slot></span>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-eeafffe4", module.exports)
  } else {
    hotAPI.update("_v-eeafffe4", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}