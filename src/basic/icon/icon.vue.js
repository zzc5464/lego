




module.exports = {
    props: [ 'name', 'size', 'color' ],

    data: function () {

        var list = [];

        this.name
        && list.push('i-' + this.name);

        this.size
        && list.push('_text_size_' + this.size + 'px');

        this.color
        && list.push('_text_color_' + this.color);

        return {
            classObj: list
        };
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<i class=\"pingan\" :class=\"classObj\"></i>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-eec7c6f8", module.exports)
  } else {
    hotAPI.update("_v-eec7c6f8", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}