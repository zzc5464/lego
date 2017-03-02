var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert("\nspan[_v-fa497078] {\n    display: inline-block;\n    width: 32px;\n    height: 32px;\n    border: 1px solid #dcdcdc;\n    background-color: transparent;\n    box-sizing: border-box;\n    text-align: center;\n    overflow: hidden;\n}\nspan.active[_v-fa497078] {\n    border-color: #d7ac62;\n    background-color: #d7ac62;\n}\n")







var child = require('../icon/icon.vue.js');
module.exports = {
    props: ['checked', 'name', 'size', 'color'],
    data: function() {
        return {
            isChecked: this.checked
        }
    },
    methods: {
        tap: function() {
            // console.log(this.isChecked);
            this.isChecked = !this.isChecked;
        }
    },
    components: {
        'marked': child
    }
}

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<span @click=\"tap\" :checked=\"isChecked\" :class=\"{active: isChecked}\" _v-fa497078=\"\">\n      <marked class=\"dot\" v-show=\"isChecked\" name=\"check\" size=\"1.5\" color=\"#fff\" _v-fa497078=\"\"></marked>\n</span>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache["\nspan[_v-fa497078] {\n    display: inline-block;\n    width: 32px;\n    height: 32px;\n    border: 1px solid #dcdcdc;\n    background-color: transparent;\n    box-sizing: border-box;\n    text-align: center;\n    overflow: hidden;\n}\nspan.active[_v-fa497078] {\n    border-color: #d7ac62;\n    background-color: #d7ac62;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-fa497078", module.exports)
  } else {
    hotAPI.update("_v-fa497078", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}