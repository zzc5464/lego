




module.exports = {
    props: [ 'width', 'height', 'size', 'filled', 'position' ],

    data: function () {
        
        var obj = {}, list = [];

        this.width  && (obj.width  = this.width  + 'rem');
        this.height && (obj.height = this.height + 'rem');

        
        this.filled === 'true'  && list.push('_button_filled');
        this.size               && list.push('_text_size_' + this.size + 'px');
        this.position           && list.push('_tab_button_' + this.position);

        return {
            styleObj: obj,
            classObj: list
        }
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<button class=\"_tab_button\" :class=\"classObj\" :style=\"styleObj\"><slot></slot></button>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  if (!module.hot.data) {
    hotAPI.createRecord("_v-52de0038", module.exports)
  } else {
    hotAPI.update("_v-52de0038", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}