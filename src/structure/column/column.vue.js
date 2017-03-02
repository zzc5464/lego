




module.exports = {
    props: [ 'width', 'align' ],

    data: function() {
        var justifyContent = {
            left    : 'flex-start',
            right   : 'flex-end',
            center  : 'center'
        }

        return {
            styleObj: {
                width           : this.width + 'rem', 
                justifyContent  : justifyContent[this.align] || justifyContent['left']
            }
        };
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"_column\" :style=\"styleObj\"><slot></slot></div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-e67e4e2e", module.exports)
  } else {
    hotAPI.update("_v-e67e4e2e", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}