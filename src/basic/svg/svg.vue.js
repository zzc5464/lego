




module.exports = {
    props: [ 'width', 'height' ],

    data: function () {
        var styleObj = {};
        
        this.width  && (styleObj.width  = this.width  + 'rem');
        this.height && (styleObj.height = this.height + 'rem');

        return {
            styleObj: styleObj
        };
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"_svg\" :style=\"styleObj\"><slot></slot></div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-6894e2a4", module.exports)
  } else {
    hotAPI.update("_v-6894e2a4", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}