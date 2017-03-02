




module.exports = {
    props: [ 'size', 'bgcolor' ],

    data: function() {
        
        var list = [];

        this.bgcolor 
        && list.push('_bgcolor_' + this.bgcolor);

        this.size
        && list.push('_text_size_' + this.size + 'px');

        return {
            classObj: list
        };
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<span class=\"_skeleton\" :class=\"classObj\"><slot></slot></span>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-6acbb9f8", module.exports)
  } else {
    hotAPI.update("_v-6acbb9f8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}