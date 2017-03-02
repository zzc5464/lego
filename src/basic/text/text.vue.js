




module.exports = {
    props: [ 'size', 'color' ],

    data: function() {
        var list = [];

        this.color 
        && list.push('_text_color_' + this.color);

        this.size  
        && list.push('_text_size_' + this.size + 'px');

        return {
            classObj: list
        }
    }
}    

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<span class=\"_text\" :class=\"classObj\"><slot></slot></span>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-84e5a5f8", module.exports)
  } else {
    hotAPI.update("_v-84e5a5f8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}