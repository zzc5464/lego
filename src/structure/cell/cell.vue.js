






module.exports = {
    props: [ 'height', 'border', 'bgcolor' ],
    data: function() {
        return {
            styleObj: {
                height: this.height + 'rem',
                backgroundColor: this.bgcolor
            },
            classObj: {
                '_border': this.border === 'true'
            }
        };
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"_cell\" :class=\"classObj\" :style=\"styleObj\">\n    <slot></slot>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-2cf463a9", module.exports)
  } else {
    hotAPI.update("_v-2cf463a9", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}