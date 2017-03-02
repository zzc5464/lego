






module.exports = {
    props: [ 'align' ],
    data: function() {
        var justifyContent = {
            left    : 'flex-start',
            right   : 'flex-end',
            center  : 'center'
        }

        return {
            styleObj: {
                justifyContent  : justifyContent[this.align] || justifyContent['left']
            }
        };
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"_flex-column\" :style=\"styleObj\">\n    <slot></slot>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-3c4dc802", module.exports)
  } else {
    hotAPI.update("_v-3c4dc802", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}